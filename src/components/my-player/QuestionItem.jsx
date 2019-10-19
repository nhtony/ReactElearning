import React, { Component } from 'react'

export default class QuestionItem extends Component {

    render() {
        const { avt, hoTen, time, qcontent, qtitle, answers } = this.props.question;
        return (
            <div className="qa-item">
                <div className="row">
                    <div className="avatar col-2">
                        <img src={avt} alt="" />
                        <p>{hoTen}<span className="pl-2">{time}</span></p>
                    </div>
                    <div className="qa-content col-9">
                        <h6 className="qa-content__title">{qtitle}</h6>
                        <p className="qa-cotent__ask">{qcontent}</p>
                    </div>
                    {
                        this.props.chosen ?
                            <div className="col-1">
                                <i className="fa fa-facebook"></i>
                            </div> :
                            <div className="col-1">
                                <span className="mr-2">{answers.length}</span>
                                <i onClick={() => this.props.showHideAnswer(this.props.question)} className="fa fa-align-justify"></i>
                            </div>
                    }
                </div>
            </div>
        )
    }

}
