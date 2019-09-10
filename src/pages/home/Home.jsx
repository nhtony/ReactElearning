import React, { Component } from 'react'
import Banner from '../../components/home/Banner';
import Features from '../../components/home/Features';
import ListCourse from '../../components/home/ListCourse';
import Topics from '../../components/home/Topics';
import Reviews from '../../components/home/Reviews';
import SidebarSignUp from '../../components/genaral/SidebarSignUp';
import SidebarLogin from '../../components/genaral/SidebarLogin';
import LoadingService from '../../common/LoadingService';
import { connect } from 'react-redux';
import { getListCourseAction } from '../../redux/actions/Courses.action';
class Home extends Component {

    componentDidMount() {
        this.props.getCourses();
    }

    render() {
        return (!this.props.coursesLoading) ? (
            <section className="home-page">
                <Banner></Banner>
                <SidebarSignUp></SidebarSignUp>
                <SidebarLogin></SidebarLogin>
                <Features></Features>
                <ListCourse Courses={this.props.Courses}></ListCourse>
                <Topics></Topics>
                <Reviews></Reviews>
            </section>
        ) : <LoadingService></LoadingService>
    }
}
const mapStateToProps = (state) => {
    return {
        Courses: state.CoursesReducer.Courses,
        coursesLoading: state.CoursesReducer.coursesLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCourses: () => {
            dispatch(getListCourseAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
