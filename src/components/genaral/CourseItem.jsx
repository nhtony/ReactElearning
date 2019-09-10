import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDetailCourseAction } from '../../redux/actions/Course.action';
class CourseItem extends Component {

    render() {
      
        
        const { maKhoaHoc, hinhAnh, tenKhoaHoc, nguoiTao, soLuongHocVien } = this.props.courseContent
        return (
            <div className="item-course-list">
                <div className="featured-course">
                    <div className="featured-course__thumb">
                        <Link onClick={() => this.props.getInfoCourse(maKhoaHoc)} to={"/home/course/detail/" + maKhoaHoc}>
                            <img src={hinhAnh} alt="" />
                        </Link>
                    </div>
                    <div className="featured-course__wrap">
                        <div className="featured-course__text">
                            <h5>
                                <Link onClick={() => this.props.getInfoCourse(maKhoaHoc)} to={"/home/course/detail/" + maKhoaHoc}>{tenKhoaHoc}
                                </Link>
                            </h5>
                            <div className="course-author">
                                <img className="author-img" src="/img/1.jpg" alt="" />
                                <div className="course-author__text">
                                    <h6>{nguoiTao.hoTen}</h6>
                                    <Link to={"/home/author/profile/" + nguoiTao.hoTen}>VIEW PROFILE</Link>
                                </div>
                            </div>
                            <div className="featured-course__meta ">
                                <div className="btn-free">
                                    <button>FREE</button>
                                </div>
                                <div>
                                    <span><i className="fa fa-user mr-1"></i>{soLuongHocVien}</span>
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