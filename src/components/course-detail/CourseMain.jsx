import React, { PureComponent } from 'react'
import About from './About';
import Curriculum from './Curriculum';
import Instructor from './Instructor';
import Reviews from './Reviews';

 export default class CourseMain extends PureComponent {

    render() {
        const { maKhoaHoc, hinhAnh } = this.props.courseDetail;
        return (
            <div className="courseMain">
                <div className="imgCourse">
                    <img width="100%" height="470px" src={hinhAnh} alt="hinh" />
                </div>
                <ul className="nav nav-tabs mt-4" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="about-tab" data-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="true">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="curriculum-tab" data-toggle="tab" href="#curriculum" role="tab" aria-controls="curriculum" aria-selected="false">Curriculum</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="instructor-tab" data-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false">Instructor</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="review-course-tab" data-toggle="tab" href="#review-course" role="tab" aria-controls="review-course" aria-selected="false">Reviews</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <About></About>
                    <Curriculum maKH={maKhoaHoc}></Curriculum>
                    <Instructor></Instructor>
                    <Reviews maKH={maKhoaHoc}></Reviews>
                </div>
            </div>
        )
    }
}
