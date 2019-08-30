import React, { Component } from 'react'

export default class CourseItem extends Component {
    render() {
        return (
            <div className="item-course-list col-md-3 col-sm-3">
                <div className="featured-course">
                    <div className="featured-course__thumb">
                        <a href=" ">
                            <img src="https://demo.featherlayers.com/edupro-general-1/wp-content/uploads/sites/25/2016/11/course-2-370x247.jpg" alt="" />
                        </a>
                    </div>
                    <div className="featured-course__wrap">
                        <div className="featured-course__text">
                            <h5><a href=" ">Become a PHP Master and Make Money Fast</a></h5>
                            <div className="course-author">
                                <img src="../img/1.jpg" alt="" />
                                <div className="course-author__text">
                                    <h6>Henry H. Garrick</h6>
                                    <a href=" ">VIEW PROFILE</a>
                                </div>
                            </div>
                            <div className="featured-course__meta ">
                                <div className="btn-free">
                                    <button>FREE</button>
                                </div>
                                <div>
                                    <span><i className="fa fa-user mr-1"></i>4</span>
                                    <span><i className="fa fa-star mr-1"></i>5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
