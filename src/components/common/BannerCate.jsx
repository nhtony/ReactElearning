import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
export default class BannerCate extends PureComponent {
    render() {
        const name = this.props.name;
        const title = this.props.title;
        return (
            <section className="cate__banner">
                <div className="container">
                    <div className="page__breadcrumbs">
                        <h1 className="page__title">
                            {title}: {name}
                        </h1>
                        <div className="breadcrumbs">
                            <nav className="content-breadcrumb">
                                <span className="root-branch">
                                    <Link className="home" to='/home'>
                                        <span itemProp="title">Trang chủ</span>
                                    </Link>
                                </span>
                                <i className="fa fa-angle-right m-2" />
                                <span className="root-branch">
                                    <Link className="home" to='/home'>
                                        <span itemProp="title">{this.props.author ? "Giảng viên": "Danh sách khóa học"}</span>
                                    </Link>
                                </span>
                                <i className="fa fa-angle-right m-2" />
                                <span className="current-branch" itemProp="title">{name}</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
