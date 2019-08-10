import React, { Component } from 'react'
import TableUser from '../../components/admin/TableUser';
import Navbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import { connect } from 'react-redux';
import { getListUserAction } from '../../redux/actions/ListUser.action';
class AdminUsers extends Component {

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
                        <TableUser></TableUser>
                    </section>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListUser: () => {
            dispatch(getListUserAction())
        }
    }
}
export default connect(null, mapDispatchToProps)(AdminUsers);

