import React, { Component } from 'react'

export default class Instructor extends Component {
    render() {
        const { nguoiTao } = this.props.courseDatail;
        return (
            <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                <h4 className="pt-4 pb-4">INSTRUCTOR</h4>
                <div className="main__content__author">
                    <div className="col-sm-2 author-avatar">
                        <img className="author-img" alt="hinh" src="/img/1.jpg" />
                    </div>
                    <div className="col-sm-10 author__info">
                        <h4>{nguoiTao.hoTen}</h4>
                        <div className="author__info__line">
                            <div />
                        </div>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit labo riosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure rep</p>
                        <ul className="social-user"><li><a href="https://plus.google.com/#"><i className="fa fa-google" /></a></li><li><a href="https://twitter.com/#"><i className="fa fa-twitter" /></a></li><li><a href="https://facebook.com/#"><i className="fa fa-facebook" /></a></li><li><a href="https://www.instagram.com/#"><i className="fa fa-instagram" /></a></li></ul>
                    </div>
                </div>
            </div>
        )
    }
}
