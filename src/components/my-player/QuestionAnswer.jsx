import React, { Component } from 'react'
import QuestionItem from './QuestionItem';
import { connect } from 'react-redux';
import { submitQuestionAction, getIDAction } from '../../redux/actions/Question.action';

class QuestionAnswer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: 3,
            loading: false,
            loadingSubmit: false,
            qtitle: '',
            qcontent: '',
            time: "",
            showform: false
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

    renderQuestionItem = () => {
        return this.props.question.slice(0, this.state.visible).map((item, index) => {
            return (<QuestionItem question={item} key={index}></QuestionItem>)
        })
    }

    renderListQuetion = () => {


        return (
            <>
                <div className="qa-header">
                    <div className="row">
                        <div className="col-6">
                            <b>60 câu hỏi về khóa học này</b>
                        </div>
                        <div className="col-6 col-ask">

                            <button onClick={() => this.showHideAskForm()}>Đặt câu hỏi</button>
                        </div>
                    </div>
                </div>
                <div className="qa-list">
                    {this.renderQuestionItem()}
                </div>
                <div className="load-more text-center mt-4">
                    {this.renderLoadMoreButton()}
                </div>
            </>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ loadingSubmit: true });
        const obj = {
            qtitle: this.state.qtitle,
            qcontent: this.state.qcontent,
            time: this.state.time
        }
        setTimeout(() => {
            this.setState({ loadingSubmit: false, showform: !this.state.showform });
            this.props.askQuestion(obj);
        }, 2000);
    }

    handleOnchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            time: this.getCurrentTime()
        })
    }

    getCurrentTime = () => {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes();
        return date + ' ' + time;
    }

    showHideAskForm = () => {
        this.setState({
            showform: !this.state.showform
        })
    }

    renderAskForm = () => {
        const { loadingSubmit, qcontent, qtitle } = this.state;
        const style = {
            disible: {
                opacity: 0.5
            },
            enable: {
                opacity: 1
            }
        }
        return (
            <div className="ask-form" onSubmit={this.handleSubmit}>
                <form className="container">
                    <div className="input-group mb-3">
                        <input name="qtitle" type="text" className="form-control" placeholder="Tiêu đề" onChange={this.handleOnchange} />
                        <div className="input-group-append">
                            <span className="input-group-text">@example.com</span>
                        </div>
                    </div>
                    <textarea name="qcontent" id="question" cols="131" rows="8" onChange={this.handleOnchange}>
                    </textarea>
                    <div className="button-form">
                        <button className="post-question-btn" style={(qcontent && qtitle) ? style.enable : style.disible} type="submit">
                            {loadingSubmit && (
                                <i
                                    className="fa fa-refresh fa-spin"
                                    style={{ marginRight: "5px" }}
                                />
                            )}
                            {loadingSubmit && <span>Đang tải...</span>}
                            {!loadingSubmit && <span>Đăng</span>}
                        </button>

                        <button className="cancel-btn" onClick={() => this.showHideAskForm()}>Hủy</button>
                    </div>
                </form>
            </div>
        )
    }

    renderLoadMoreButton = () => {
        const { loading } = this.state;
        return (<button disabled={false} className="load-more-btn" onClick={this.loadMore}>
            {loading && (
                <i className="fa fa-refresh fa-spin" style={{ marginRight: "5px" }} />
            )}
            {loading && <span>Đang tải...</span>}
            {!loading && <span>Xem thêm</span>}
        </button>)
    }

    componentDidMount() {
        this.props.getIdCourse(this.props.maKH);
    }

    render() {

        return (
            <div className="tab-pane fade" id="qa" role="tabpanel" aria-labelledby="qa-tab">
                {this.state.showform ? this.renderAskForm() : this.renderListQuetion()}
            </div>
        );
    }


}
const mapStateToProps = (state) => {
    return {
        question: state.QuestionReducer.question
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        askQuestion: (question) => {
            dispatch(submitQuestionAction(question))
        },
        getIdCourse: (idcourse) => {
            dispatch(getIDAction(idcourse))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionAnswer)