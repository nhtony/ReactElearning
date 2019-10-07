import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import ReviewBar from './ReviewBar';
import ReviewCircle from './ReviewCircle';


class ReviewValueChart extends PureComponent {

    sortedList = [];

    cmtQuatity = 0;

    arrangeVal = 0;

    reviewBarValue = {
        '5': { value: 0 },
        '4': { value: 0 },
        '3': { value: 0 },
        '2': { value: 0 },
        '1': { value: 0 },
    };

    sortList = (list) => {
        let array = list.map(item => item.rating);
        return array.sort();
    }

    countFreqElement(arr) {
        let result = [], element = [], prev;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== prev) {
                element.push(arr[i]);
                result.push(1);
            } else {
                result[result.length - 1]++;
            }
            prev = arr[i];
        }
        return { listName: element, listValue: result };
    }

    getValueReview = () => {
        const { listName, listValue } = this.countFreqElement(this.sortedList);
        for (const key in this.reviewBarValue) {
            let index = listName.findIndex(item => key === item.toString());
            if (index !== -1) {
                this.reviewBarValue[key].value = listValue[index];
            }
        }

    }

    renderReviewBar() {
        let elements = [];
        for (const key in this.reviewBarValue) {
            elements.unshift(<ReviewBar key={key} name={key} reviewValue={this.reviewBarValue[key]} quantity={this.cmtQuatity} getArrangement={this.getArrangement} />)
        }
        return elements
    }

    componentWillReceiveProps(nextProps) {
        this.cmtQuatity = nextProps.comments.length;
        this.sortedList = this.sortList(nextProps.comments);
    }

    render() {
        this.getValueReview();
        let listEle = this.renderReviewBar();
        return (
            <div className="row review-circle">
                <ReviewCircle reviewValue={this.reviewBarValue} quantity={this.cmtQuatity}></ReviewCircle>
                <div className="rating-breakdown col-sm-8">
                    <ul data-view="ratingBreakdown" className="js-rating-breakdown">
                        {listEle.map(item => item)}
                    </ul>
                </div>
                <div data-rating="0.0" className="rating">
                    <span>({this.cmtQuatity} Lượt đánh giá)</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.ReviewReducer.comments
    }
}

export default connect(mapStateToProps, null)(ReviewValueChart);