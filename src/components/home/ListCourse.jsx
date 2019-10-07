import React, { Component } from 'react'
import Slider from "react-slick";
import CourseItem from '../common/CourseItem';

export default class ListCourse extends Component {

  renderCourses = () => {
    return this.props.Courses.map((course, index) => {
      return <CourseItem courseContent={course} key={index} />
    });
  }

  render() {
    var settings = {
      dots: false,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };

    return (
      <section className="courses">
        <div className="container-fluid">
          <div className="courses__title">
            <span><em /></span>
            <h2>DANH SÁCH KHÓA HỌC</h2>
          </div>
        </div>
        <div className="courses__content container-fluid">
          <Slider {...settings}>
            {this.renderCourses()}
          </Slider>
        </div>
      </section>
    );
  }
}

