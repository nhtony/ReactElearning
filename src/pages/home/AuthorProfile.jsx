import React, { Component } from 'react'
import BannerCate from '../../components/genaral/BannerCate'
import { connect } from 'react-redux';
import { getListCourseAction } from '../../redux/actions/Courses.action';

import ListAuthorCourse from '../../components/author-profile/ListAuthorCourse';
import LoadingService from '../../common/LoadingService';
import SocialList from '../../components/genaral/SocialList';
class AuthorProfile extends Component {

    componentDidMount() {
        this.props.getCourses();
    }

    render() {
        const title = "Instructor";
        return (this.props.coursesLoaded) ? (
            <section className="author-profile-page">
                <BannerCate author={true} title={title} name={this.props.match.params.name}></BannerCate>
                <div className="container">
                    <div className="author-profile row">
                        <div className="img col-3">
                            <img className="author-img" src="/img/1.jpg" alt="" />
                        </div>
                        <div className="author-info col-9">
                            <h5 className="author-name decorLine">Name</h5>
                            <p className="author-infomation">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, voluptatem dolore atque facere ducimus repellat beatae voluptas explicabo ad modi, voluptates aut. Sapiente consectetur qui natus incidunt reprehenderit, explicabo laborum nisi dolorum in dicta, nemo at dolorem ex? Suscipit, molestiae esse modi voluptatibus aliquid necessitatibus cupiditate saepe quos at similique!</p>
                            <SocialList></SocialList>
                        </div>

                    </div>
                    <ListAuthorCourse Courses={this.props.Courses} name={this.props.match.params.name}></ListAuthorCourse>
                </div>
            </section>
        ) : <LoadingService></LoadingService>
    }
}
const mapStateToProps = (state) => {
   
    return {
        Courses: state.CoursesReducer.Courses,
        coursesLoaded: state.CoursesReducer.coursesLoaded
      
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCourses: () => {
            dispatch(getListCourseAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthorProfile);
