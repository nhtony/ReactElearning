import React, { Component } from 'react'
import BannerCate from '../../components/genaral/BannerCate'

export default class AuthorProfile extends Component {
    render() {
        const title = "Instructor";
        return (
            <section className="course-category-page">
                <BannerCate  title={title} content={this.props.params}></BannerCate>
            </section>
        )
    }
}
