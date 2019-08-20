import React, { Component } from 'react'
import { connect } from 'react-redux';
import TableCourses from '../../components/admin/TableCourses';
import { getListCourseAction } from '../../redux/actions/Courses.action';
class Courses extends Component {

    componentDidMount() {
        this.props.getListCourse();
    }
    
    render() {
        return (<TableCourses></TableCourses>)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListCourse: () => {
            dispatch(getListCourseAction())
        }
    }
}
export default connect(null, mapDispatchToProps)(Courses);