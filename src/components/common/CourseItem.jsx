import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDetailCourseAction } from '../../redux/actions/Course.action';

class CourseItem extends Component {

    render() {
        const { maKhoaHoc, hinhAnh, tenKhoaHoc, nguoiTao, luotXem } = this.props.courseContent;
        const uri = (this.props.isEnroll) ? `/home/my/player/${maKhoaHoc}` : `/home/course/detail/${maKhoaHoc}`;
        return (
            <div className="item-course-list">
                <div className="featured-course">
                    <div className="featured-course__thumb">
                        {(!this.props.approving) ? <Link onClick={() => this.props.getInfoCourse(maKhoaHoc)} to={uri}>
                            <img src={hinhAnh} alt="" />
                        </Link> : <img src={hinhAnh} alt="" />}
                    </div>
                    <div className="featured-course__wrap">
                        <div className="featured-course__text">
                            <h5>
                                {(!this.props.approving) ? <Link onClick={() => this.props.getInfoCourse(maKhoaHoc)} to={uri}>{tenKhoaHoc}
                                </Link> : tenKhoaHoc}
                            </h5>
                            <div className="course-author">
                                <img className="author-img" src="/img/1.jpg" alt="" />
                                <div className="course-author__text">
                                    <h6>{nguoiTao.hoTen}</h6>
                                    {(!this.props.approving) && <Link to={`/home/author/profile/${nguoiTao.hoTen}`}>XEM THÔNG TIN</Link>}
                                </div>
                            </div>
                            <div className="featured-course__meta ">
                                <div className="btn-free">
                                    {(!this.props.approving) ? <Link onClick={() => this.props.getInfoCourse(maKhoaHoc)} to={uri}>
                                        <button>
                                            FREE
                                        </button>
                                    </Link> : <button>
                                            FREE
                                        </button>}
                                </div>
                                <div>
                                    <span><i className="fa fa-user mr-1"></i>{luotXem}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInfoCourse: (idcourse) => {
            dispatch(getDetailCourseAction(idcourse));
        }
    }
}

export default connect(null, mapDispatchToProps)(CourseItem);