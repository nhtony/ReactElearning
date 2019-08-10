import React, { Component } from 'react'
import Navbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import TableRegisterUser from '../../components/admin/TableRegisterUser';

export default class RegisterUser extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between">
                <Sidebar></Sidebar>
                <div id="admin-wrapper">
                    <Navbar></Navbar>
                    <section id="admin-content" className="p-3">
                        <TableRegisterUser></TableRegisterUser>
                    </section>
                </div>
            </div>
        )
    }
}
