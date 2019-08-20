import React, { Component } from 'react'
import Header from '../../components/home/Header';
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
            <div>
                <Header></Header>
                <Banner></Banner>
                <SidebarSignUp></SidebarSignUp>
                <SidebarLogin></SidebarLogin>
                <Features></Features>
                <ListCourse></ListCourse>
                <Topics></Topics>
                <Reviews></Reviews>
            </div>
        )
    }
}


