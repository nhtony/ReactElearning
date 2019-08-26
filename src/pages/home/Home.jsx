import React, { Component } from 'react'

import Banner from '../../components/home/Banner';
import Features from '../../components/home/Features';
import ListCourse from '../../components/home/ListCourse';
import Topics from '../../components/home/Topics';
import Reviews from '../../components/home/Reviews';
import SidebarSignUp from '../../components/home/SidebarSignUp';
import SidebarLogin from '../../components/home/SidebarLogin';

export default class Home extends Component {
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


