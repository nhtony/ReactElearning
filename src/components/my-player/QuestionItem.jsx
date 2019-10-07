import React, { Component } from 'react'
import { getLocalStorage, userLogin } from '../../common/Config';
export default class QuestionItem extends Component {
    render() {
        let userInfor = (localStorage.getItem(userLogin)) ? getLocalStorage(userLogin) : {};
        return (
            <div className="qa-item">
                <div className="row">
                    <div className="avatar col-3">
                        <img src={userInfor.avatar} alt="" />
                        <p>{userInfor.hoTen}<span className="pl-2">{this.props.question.time}</span></p>
                    </div>
                    <div className="qa-content col-9">
                        <h6 className="qa-content__title">{this.props.question.qtitle}</h6>
                        <p className="qa-cotent__ask">{this.props.question.qcontent}</p>
                    </div>
                </div>
            </div>
        )
    }
}
