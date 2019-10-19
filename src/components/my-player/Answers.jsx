import React, { Component } from 'react'
import { getLocalStorage, userLogin } from '../../common/Config';
import { connect } from 'react-redux';
import { submitAnswerAction } from '../../redux/actions/Question.action';
import AnswerItem from './AnswerItem';

class Answers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            visible: 3,
            loading: false,
            loadingSubmit: false,
            atitle: '',
            time: "",
            acontent: '',
        }
        this.loadMore = this.loadMore.bind(this);
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            time: this.getCurrentTime()
        })
    }

    getCurrentTime = () => {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes();
        return date + ' ' + time;
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const userInfo = getLocalStorage(userLogin);
        const { qtitle } = this.props.question
        const obj = {
            atitle: qtitle,
            acontent: this.state.answer,
            time: this.state.time,
            name: userInfo.hoTen,
            avt: userInfo.avatar || '/img/avatar.png',
        }

        this.setState({ loadingSubmit: true });
        setTimeout(() => {
            this.setState({ loadingSubmit: false, showform: !this.state.showform });
            this.props.submitAnswer(obj);
        }, 1500);
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



    renderLoadMoreButton = (mang) => {
        const { loading } = this.state;
        return (this.state.visible > mang.length) ? null : (<button disabled={false} className="load-more-btn" onClick={this.loadMore}>
            {loading && (
                <i className="fa fa-refresh fa-spin" style={{ marginRight: "5px" }} />
            )}
            {loading && <span>Đang tải...</span>}
            {!loading && <span>Xem thêm</span>}
        </button>)
    }

    render() {
        const { answers } = this.props.question
        const { loadingSubmit, acontent, atitle } = this.state;
        const style = {
            disible: {
                opacity: 0.5
            },
            enable: {
                opacity: 1
            }
        }
        return (
            <div className="answer-item">
                {answers.slice(0, this.state.visible).map((item, index) => (
                    <AnswerItem key={index} answer={item}></AnswerItem>
                ))}
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="answer" type="text" />
                    <button className="post-question-btn" style={(acontent && atitle) ? style.enable : style.disible} type="submit">
                        {loadingSubmit && (
                            <i
                                className="fa fa-refresh fa-spin"
                                style={{ marginRight: "5px" }}
                            />
                        )}
                        {loadingSubmit && <span>Đang tải...</span>}
                        {!loadingSubmit && <span>Đăng</span>}
                    </button>
                </form>
                <div className="load-more text-center mt-4">
                    {this.renderLoadMoreButton(answers)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.QuestionReducer.questions
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        submitAnswer: (answer) => {
            dispatch(submitAnswerAction(answer))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Answers);