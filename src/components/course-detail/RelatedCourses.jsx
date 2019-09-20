import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { getListCourseAction } from '../../redux/actions/Courses.action';
import CourseItem from '../genaral/CourseItem';
import Slider from "react-slick";
import BarLoader from 'react-spinners/BarLoader';
import { css } from '@emotion/core';

const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;
class RelatedCourses extends PureComponent {

    getCourseFromOthers = (list, name) => {
        return list.filter(course => course.nguoiTao.hoTen !== name);
    }

    renderRelatedCourseItem = (list) => {
        return list.map((item, index) => {
            return (
            
                    <CourseItem key={index} courseContent={item}></CourseItem>
            
            )
        })
    }

    componentDidMount() {
        this.props.getListCourse();
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



        const author = (Object.entries(this.props.courseDetail).length === 0 && this.props.courseDetail.constructor === Object) ? {} : this.props.courseDetail.nguoiTao;

        const otherCourses = this.getCourseFromOthers(this.props.Courses, author.hoTen);

        return (this.props.coursesLoaded) ? (
            <section className="related-courses">
                <h3 className="text-center">RELATED COURSES</h3>
                <Slider {...settings}>
                    {this.renderRelatedCourseItem(otherCourses)}
                </Slider>
            </section>
        ) : <BarLoader
            css={override}></BarLoader>
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListCourse: () => {
            dispatch(getListCourseAction())
        }
    }
}
const mapStateToProps = (state) => {
    return {
        Courses: state.CoursesReducer.Courses,
        coursesLoaded: state.CoursesReducer.coursesLoaded
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RelatedCourses);