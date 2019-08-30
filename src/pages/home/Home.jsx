import React, { Component } from 'react'

import Banner from '../../components/home/Banner';
import Features from '../../components/home/Features';
import ListCourse from '../../components/home/ListCourse';
import Topics from '../../components/home/Topics';
import Reviews from '../../components/home/Reviews';
import SidebarSignUp from '../../components/home/SidebarSignUp';
import SidebarLogin from '../../components/home/SidebarLogin';
import { connect } from 'react-redux';
import { getListCourseAction } from '../../redux/actions/Courses.action';
class Home extends Component {

    componentDidMount() {
        this.props.getCourses();
    }

    render() {
        return (
            <section className="home-page">
                <Banner></Banner>
                <SidebarSignUp></SidebarSignUp>
                <SidebarLogin></SidebarLogin>
                <Features></Features>
                <ListCourse></ListCourse>
                <Topics></Topics>
                <Reviews></Reviews>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCourses: () => {
            dispatch(getListCourseAction())
        }
    }
}

export default connect(null, mapDispatchToProps)(Home)
