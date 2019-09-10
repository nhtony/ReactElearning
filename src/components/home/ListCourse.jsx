import React, { Component } from 'react'
import Slider from "react-slick";
import CourseItem from '../genaral/CourseItem';

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
            <h2>Udema Categories Courses</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
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

