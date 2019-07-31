import React, { Component } from 'react'

export default class Topics extends Component {
  
    render() {
        return (
            <section className="topic">
                <div className="container-fluid">
                    <div className="topic__title">
                        <span><em /></span>
                        <h2>Udema Popular Courses</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </div>
                    <div className="topic__content">
                        <div className="filter-menu">
                            <button type="button" className="btn btn-primary filter-btn" data-filter="*">All</button>
                            <button type="button" className="btn btn-primary filter-btn" data-filter=".web">Web</button>
                            <button type="button" className="btn btn-primary filter-btn" data-filter=".graphics">Graphics</button>
                            <button type="button" className="btn btn-primary filter-btn" data-filter=".seo">Seo</button>
                        </div>
                        <div className="filter-item">
                            <div className="row">
                                <div className="item col-md-4 graphics web">
                                    <div className="card">
                                        <img className="card-img-top" src="./img/yoga.jpg" alt="" />
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Text</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item col-md-4 seo web graphics">
                                    <div className="card">
                                        <img className="card-img-top" src="./img/execl.jpg" alt="" />
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Text</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item col-md-4 web seo">
                                    <div className="card">
                                        <img className="card-img-top" src="./img/django.jpg" alt="" />
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Text</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
