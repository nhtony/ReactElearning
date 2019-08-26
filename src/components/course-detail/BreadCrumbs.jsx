import React, { Component } from 'react'

export default class BreadCrumbs extends Component {
    render() {
        return (
            <div className="archive__banner-top">
                <div className="container">
                    <div className="archive__breadcrumbs">
                        <div className="breadcrumbs">
                            <span itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                                <a className="home" href="https://demo.featherlayers.com/edupro-general-1/" itemProp="url"><span itemProp="title">Home</span></a>
                            </span><i className="fa fa-angle-right" />
                            <span itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                                <a href="https://demo.featherlayers.com/edupro-general-1/course_category/business/" itemProp="url"><span itemProp="title">Business</span></a>
                            </span>
                            <i className="fa fa-angle-right" />
                            <span itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                                <span itemProp="title">Test-Driven Development in PHP with PHPUnit</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}