import React, { Component } from 'react'

export default class AnswerItem extends Component {
    render() {
        console.log(this.props.answer);
        const { avt, name, time, acontent } = this.props.answer
        return (
            <div className="row">
                <div className="avatar col-1">
                    <img src={avt} alt="" />
                </div>
                <div className="answer-content  col-10">
                    <p>{name}<span className="pl-2">{time}</span></p>
                    <p>{acontent}</p>
                </div>
            </div>
        )
    }
}
