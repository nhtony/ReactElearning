import React, { Component } from 'react'
import Repond from './Repond';
import ReviewValueChart from './ReviewValueChart';
import ReviewItem from './ReviewItem';
import { connect } from 'react-redux';

class Reviews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: 3,
            loading: false
        };
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                visible: this.state.visible + 3,
                loading: false
            });
        }, 1000);
    }


    renderReviewItem = () => {
        return this.props.comments.slice(0, this.state.visible).map((item, index) => {
            return (<ReviewItem content={item} key={index}></ReviewItem>)
        })
    }


    renderLoadMoreButton = () => {
        const { loading } = this.state;
        return (this.state.visible > this.props.comments.length) ? null : (<button disabled={false} className="load-more-btn text-right" onClick={this.loadMore}>
            {loading && (
                <i
                    className="fa fa-refresh fa-spin"
                    style={{ marginRight: "5px" }}
                />
            )}
            {loading && <span>Loading...</span>}
            {!loading && <span>Load more</span>}
        </button>)
    }


    render() {
        return (
            <div className="tab-pane fade" id="review-course" role="tabpanel" aria-labelledby="review-course-tab">
                <h4 className="pt-4 pb-4">REVIEWS</h4>
                <ReviewValueChart></ReviewValueChart>
                <Repond maKH={this.props.maKH}></Repond>
                <ul className="review-list">
                    {this.renderReviewItem()}
                </ul>
                {this.renderLoadMoreButton()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        comments: state.ReviewReducer.comments
    }
}
export default connect(mapStateToProps, null)(Reviews)