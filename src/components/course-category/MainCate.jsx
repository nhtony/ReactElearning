import React, { PureComponent } from 'react'
import CourseItem from '../genaral/CourseItem'
import { connect } from 'react-redux';
import { getCoursesByCatogoryAction } from '../../redux/actions/Courses.action';
class MainCate extends PureComponent {

    componentDidMount() {
        this.props.getCateCourses(this.props.cateInfo.mdm)
    }

    renderCourseItem = () => {
        return this.props.CateCourses.map((item, index) => {
            return (<div key={index} className="col-md-4">
                <CourseItem courseContent={item}></CourseItem>
            </div>)
        })
    }

    render() {
        return (
            <section className="main-cate-courses row">
                {this.renderCourseItem()}
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        CateCourses: state.CoursesReducer.CategoryCourses
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCateCourses: (cateID) => {
            return dispatch(getCoursesByCatogoryAction(cateID));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainCate)