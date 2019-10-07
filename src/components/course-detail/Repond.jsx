import React, { PureComponent } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { submitReviewAction, getIDAction } from '../../redux/actions/Review.action';
import { connect } from 'react-redux';

class Repond extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            rating: 1,
            comment: "",
            time: "",
            loading: false
        }
    }

    handleOnchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            time: this.getCurrentTime()
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const obj = {
            rating: this.state.rating,
            comment: this.state.comment,
            time: this.state.time
        }
        setTimeout(() => {
            this.setState({ loading: false,comment: "" });
            this.props.review(obj);
        }, 2000);
    }

    getCurrentTime = () => {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes();
        return date + ' ' + time;
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    renderTitle = () => {
        return (this.props.isLogin) ? (<h5 id="reply-title" className="comment-reply-title">Hãy để lại góp ý của bạn </h5>) : (<h5 id="reply-title" className="comment-reply-title">Để đóng góp ý kiến, xin vui lòng đăng nhập.</h5>)
    }

    renderReviewStars = () => {
        const { rating } = this.state.rating;
        return (this.props.isLogin) ? (<div className="rating-star">
            <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
            />
            <span>Your email address will not be published. Required fields are marked *</span>
        </div>) : null;
    }


    render() {
        const style = {
            disible: {
                opacity: 0.5
            },
            enable: {
                opacity: 1
            }
        }
        const { loading } = this.state;

        this.props.getIdCourse(this.props.maKH);

        return (

            <div id="respond" className="comment-respond">
                {this.renderTitle()}
                {this.renderReviewStars()}
                <form className="form-comment" onSubmit={this.handleSubmit}>
                    <textarea className="p-3" id="comment" name="comment" cols="84" rows="4" aria__required="true" placeholder="Góp ý của bạn" onChange={this.handleOnchange} required  ></textarea>
                    <div className="submit-btn">
                        <button style={(!this.props.isLogin) ? style.disible : style.enable} disabled={!this.props.isLogin} type="submit">
                            {loading && (
                                <i
                                    className="fa fa-refresh fa-spin"
                                    style={{ marginRight: "5px" }}
                                />
                            )}
                            {loading && <span>Đang tải...</span>}
                            {!loading && <span>ĐĂNG</span>}
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.UserReducer.isLogin,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        review: (comment) => {
            dispatch(submitReviewAction(comment))
        },
        getIdCourse: (idcourse) => {
            dispatch(getIDAction(idcourse))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Repond);