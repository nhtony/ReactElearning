import React, { Component } from 'react'

export default class CourseTitle extends Component {
    render() {
        return (
            <div className="single__head">
                <div className="container ">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h2 className="page__title">Test-Driven Development in PHP with PHPUnit</h2>
                            <div className="single__box row">
                                <div className="students-number col col-2">
                                    <i className="fa fa-user" /><span>3</span>
                                    <p>STUDENTS</p>
                                </div>
                                <div className="rating-star col col-2">
                                    <i className="fa fa-star" /><span className="rating-score">0.0</span>
                                    <p>REVIEWS (0)</p>
                                </div>
                                <div className="learning-hours col col-2">
                                    <i className="fa fa-clock-o" /><span>8.3</span>
                                    <p>LEARNING HOURS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
