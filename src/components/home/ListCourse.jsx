import React, { Component } from 'react'
import Slider from "react-slick";
import { connect } from 'react-redux'
import { getListCourseAction } from '../../redux/actions/ListCourse.action';
import Course from './Course';
class ListCourse extends Component {

  componentDidMount() {
    this.props.getCourses();
  }

  renderCourses = () => {
    return this.props.Courses.map((course, index) => {
      return <Course course={course} key={index} />
    });
  }


  render() {
    var settings = {
      dots: true,
      arrows: true,
      infinite: true,
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

const mapStateToProps = (state) => {
  return {
    Courses: state.CoursesReducerStore.Courses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCourses: (courses) => {
      dispatch(getListCourseAction(courses))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCourse);