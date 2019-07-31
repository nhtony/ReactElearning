import React, { Component } from 'react'
import Navbar from '../components/admin/Navbar';
import Sidebar from '../components/admin/Sidebar';
import Form from '../components/admin/Form';
export default class AddUser extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between">
                <Sidebar></Sidebar>
                <div id="admin-wrapper">
                    <Navbar></Navbar>
                    <section id="admin-content" className="p-3">
                        <Form></Form>
                    </section>
                </div>
            </div>
        )
    }
}
