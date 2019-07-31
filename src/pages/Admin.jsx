import React, { Component } from 'react'
import Navbar from '../components/admin/Navbar';
import Sidebar from '../components/admin/Sidebar';
import TableUser from '../components/admin/TableUser';
import { connect } from 'react-redux';
import { getListUserAction } from '../redux/actions/ListUser.action';
class Admin extends Component {

    componentDidMount() {
        this.props.getListUser();
    }

    render() {
        return (
            <div className="d-flex justify-content-between">
                <Sidebar></Sidebar>
                <div id="admin-wrapper">
                    <Navbar></Navbar>
                    <section id="admin-content" className="p-3">
                        <TableUser users={this.props.Users}></TableUser>
                    </section>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Users: state.UsersReducerStore
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListUser: (users) => {
            dispatch(getListUserAction(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
