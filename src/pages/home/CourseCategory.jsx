import React, { Component } from 'react'
import BannerCate from '../../components/genaral/BannerCate'
import AsideCate from '../../components/course-category/AsideCate'
import MainCate from '../../components/course-category/MainCate'

export default class CourseCategory extends Component {

    render() {
        const title = "COURSE CATEGORY";
        return (
            <section className="course-category-page">
                <BannerCate title={title} content={this.props.categoryInfor}></BannerCate>
                <section className="main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <AsideCate></AsideCate>
                            </div>
                            <div className="col-9">
                                <MainCate cateInfo={this.props.categoryInfor}></MainCate>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}
