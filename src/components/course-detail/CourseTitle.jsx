import React, { PureComponent } from 'react'
import { courseContent } from '../../common/CourseService';
import { connect } from 'react-redux';

class CourseTitle extends PureComponent {
    render() {
        const { tenKhoaHoc, luotXem, maKhoaHoc } = this.props.courseDetail;
        const { duration } = (courseContent.hasOwnProperty(maKhoaHoc)) ? courseContent[maKhoaHoc] : {};
        return (
            <div className="single__head">
                <div className="container ">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h2 className="page__title">{tenKhoaHoc}</h2>
                            <div className="single__box row">
                                <div className="students-number col col-2">
                                    <i className="fa fa-user mr-1" /><span>{luotXem}</span>
                                    <p>HỌC VIÊN</p>
                                </div>
                                <div className="rating-star col col-2">
                                    <i className="fa fa-star  mr-1" /><span className="rating-score">{(isNaN(this.props.rate)) ? '0.0' :  this.props.rate }</span>
                                    <p>ĐÁNH GIÁ ({this.props.comments.length})</p>
                                </div>
                                <div className="learning-hours col col-2">
                                    <i className="fa fa-clock-o mr-1" /><span>{duration}</span>
                                    <p>THỜI LƯỢNG</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({ rate: state.ReviewReducer.rate, comments: state.ReviewReducer.comments });

export default connect(mapStateToProps, null)(CourseTitle)
