import React, { PureComponent } from 'react'

export default class BannerCate extends PureComponent {

    render() {
        const { name } = this.props.content;
        const title = this.props.title;
        return (
            <section className="cate__banner">
                <div className="container">
                    <div className="page__breadcrumbs">
                        <h2 className="page__title">
                            {title}: {name}
                        </h2>
                        <div className="breadcrumbs">
                            <nav className="content-breadcrumb">
                                <span itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                                    <a className="home" href="https://demo.featherlayers.com/edupro-general-1/" itemProp="url"><span itemProp="title">Home</span></a>
                                </span>
                                <i className="fa fa-angle-right" />
                                <span itemProp="title">{name}</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
