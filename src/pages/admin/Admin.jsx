import React, { Component } from 'react'
import Navbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';

export default class Admin extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between">
                <Sidebar></Sidebar>
                <div id="admin-wrapper">
                    <Navbar></Navbar>
                    <section id="admin-content" className="p-3">
                     <h1>Admin Page</h1>
                    </section>
                </div>
            </div>
        )
    }
}

