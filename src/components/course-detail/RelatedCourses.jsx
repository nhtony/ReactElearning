import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { getListCourseAction } from '../../redux/actions/Courses.action';
import CourseItem from '../genaral/CourseItem';
import Slider from "react-slick";

class RelatedCourses extends PureComponent {



    getCourseFromOthers = (list, name) => {
        return list.filter(course => course.nguoiTao.hoTen !== name);
    }

    componentDidMount() {
        this.props.getListCourse();
    }

    renderRelatedCourseItem = (list) => {
        return list.map((item, index) => {
            return (
                <CourseItem key={index} courseContent={item}></CourseItem>
            )
        })
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

        return (
            <section className="related-courses">
                <h3 className="text-center">RELATED COURSES</h3>
                <Slider {...settings}>
                    {this.renderRelatedCourseItem(otherCourses)}
                </Slider>
            </section>
        )
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
        courseDetail: state.CourseReducer.courseDetail,
        Courses: state.CoursesReducer.Courses,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RelatedCourses);