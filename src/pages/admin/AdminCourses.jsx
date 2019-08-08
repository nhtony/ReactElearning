import React, { Component } from 'react'
import Navbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import { connect } from 'react-redux';
import TableCourses from '../../components/admin/TableCourses';
import { getListCourseAction } from '../../redux/actions/ListCourse.action';
class AdminCourses extends Component {

    componentDidMount() {
        this.props.getListCourse();
    }

    render() {
        const coursePage = { title: 'COURSE LIST', btnName: 'Add course' };
        return (
            <div>
                <div className="d-flex justify-content-between">
                    <Sidebar></Sidebar>
                    <div id="admin-wrapper">
                        <Navbar></Navbar>
                        <section id="admin-content" className="p-3">
                            <TableCourses pageInfo={coursePage}></TableCourses>
                        </section>
                    </div>
                </div>
            </div>
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
export default connect(null, mapDispatchToProps)(AdminCourses);