import React, { Component } from 'react'
import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import Features from '../../components/home/Features';
import ListCourse from '../../components/home/ListCourse';
import Topics from '../../components/home/Topics';
import Reviews from '../../components/home/Reviews';
import SignUpSidebar from '../../components/home/SignUpSidebar';
import LoginSidebar from '../../components/home/LoginSidebar';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Banner></Banner>
                <SignUpSidebar></SignUpSidebar>
                <LoginSidebar></LoginSidebar>
                <Features></Features>
                <ListCourse></ListCourse>
                <Topics></Topics>
                <Reviews></Reviews>
            </div>
        )
    }
}


