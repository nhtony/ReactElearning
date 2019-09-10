import React, { PureComponent } from 'react'
import { courseContent } from '../../common/CourseService';
export default class CourseTitle extends PureComponent {
    render() {
        const { tenKhoaHoc, soLuongHocVien, maKhoaHoc } = this.props.courseDetail;
        const { duration } = (courseContent.hasOwnProperty(maKhoaHoc)) ? courseContent[maKhoaHoc] : {};
        return (
            <div className="single__head">
                <div className="container ">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h2 className="page__title">{tenKhoaHoc}</h2>
                            <div className="single__box row">
                                <div className="students-number col col-2">
                                    <i className="fa fa-user mr-1" /><span>{soLuongHocVien}</span>
                                    <p>STUDENTS</p>
                                </div>
                                <div className="rating-star col col-2">
                                    <i className="fa fa-star  mr-1" /><span className="rating-score">0.0</span>
                                    <p>REVIEWS (0)</p>
                                </div>
                                <div className="learning-hours col col-2">
                                    <i className="fa fa-clock-o mr-1" /><span>{duration}</span>
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
