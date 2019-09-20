import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
export default class BreadCrumbs extends PureComponent {
    render() {
        const { tenKhoaHoc } = this.props.courseDetail;
        return (
            <div className="archive__banner-top">
                <div className="container">
                    <div className="archive__breadcrumbs">
                        <div className="breadcrumbs">
                            <span>
                                <Link to='/home' className="home"><span itemProp="title">Home</span></Link>
                            </span><i className="fa fa-angle-right" />
                            <span>
                                <Link to='/home'><span itemProp="title">Detail</span></Link>
                            </span>
                            <i className="fa fa-angle-right" />
                            <span>
                                <span itemProp="title">{tenKhoaHoc}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
