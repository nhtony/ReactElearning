import React from 'react'

export default function CourseFeatureAside(props) {
    const authorCourse = props.authorCourse;
    const duration = props.duration;
    return (
        <div className="course-features">
            <h5 className="mb-4">THÔNG TIN KHÓA HỌC</h5>
            <div className="row mb-3">
                <div className="icon col-2">
                    <i className="fa fa-file-text mr-5"></i>
                </div>
                <div className="col-6">
                    <span className="social-text">Bài học</span>
                </div>
                <div className="col-4">
                    <span>{authorCourse.length + 1}</span>
                </div>
            </div>
            <div className="row mb-3">
                <div className="icon col-2">
                    <i className="fa fa-clock-o mr-5"></i>
                </div>
                <div className="col-6">
                    <span className="social-text">Thời lượng</span>
                </div>
                <div className="col-4">
                    <span>{duration}</span>
                </div>
            </div>
            <div className="row mb-3">
                <div className="icon col-2">
                    <i className="fa fa-level-up mr-5"></i>
                </div>
                <div className="col-6">
                    <span className="social-text">Mức độ</span>
                </div>
                <div className="col-4">
                    <span> Beginner</span>
                </div>
            </div>
            <div className="row mb-3">
                <div className="icon col-2">
                    <i className="fa fa-globe mr-5"></i>
                </div>
                <div className="col-6">
                    <span className="social-text">Ngôn ngữ</span>
                </div>
                <div className="col-4">
                    <span>English</span>
                </div>
            </div>
            <div className="row mb-3">
                <div className="icon col-2">
                    <i className="fa fa-shield mr-5"></i>
                </div>
                <div className="col-6">
                    <span className="social-text">Chứng chỉ</span>
                </div>
                <div className="col-4">
                    Không
                        </div>
            </div>
        </div>
    )
}
