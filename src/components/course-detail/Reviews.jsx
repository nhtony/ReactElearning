import React, { Component } from 'react'
import Repond from './Repond';
export default class Reviews extends Component {
    render() {
        return (
            <div className="tab-pane fade" id="review-course" role="tabpanel" aria-labelledby="review-course-tab">
                <h4 className="pt-4 pb-4">REVIEWS</h4>
                <div className="row">
                    <div className="ratingCircle col-sm-4">
                        <span className="rating-circle">0.0</span>
                    </div>
                    <div className="rating-breakdown col-sm-8">
                        <ul data-view="ratingBreakdown" className="js-rating-breakdown">
                            <li className="key_5">
                                <span className="rating-breakdown__key">5 Star </span>
                                <div className="progress">
                                    <div role="progressbar" className="progress-bar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '0%' }}>
                                    </div>
                                </div>
                                <span className="rating-breakdown__count">0%</span>
                            </li>
                            <li className="key_4">
                                <span className="rating-breakdown__key">4 Star </span>
                                <div className="progress">
                                    <div role="progressbar" className="progress-bar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '0%' }}>
                                    </div>
                                </div>
                                <span className="rating-breakdown__count">0%</span>
                            </li>
                            <li className="key_3">
                                <span className="rating-breakdown__key">3 Star </span>
                                <div className="progress">
                                    <div role="progressbar" className="progress-bar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '0%' }}>
                                    </div>
                                </div>
                                <span className="rating-breakdown__count">0%</span>
                            </li>
                            <li className="key_2">
                                <span className="rating-breakdown__key">2 Star </span>
                                <div className="progress">
                                    <div role="progressbar" className="progress-bar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '0%' }}>
                                    </div>
                                </div>
                                <span className="rating-breakdown__count">0%</span>
                            </li>
                            <li className="key_1">
                                <span className="rating-breakdown__key">1 Star </span>
                                <div className="progress">
                                    <div role="progressbar" className="progress-bar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '0%' }}>
                                    </div>
                                </div>
                                <span className="rating-breakdown__count">0%</span>
                            </li>
                        </ul>
                    </div>
                    <ul data-rating="0.0" className="rating">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <span>(0 Ratings)</span>
                    </ul>
                </div>
                <ul className="review-list">
                    <li className="review-section">
                        <div className="row">
                            <div className="col-3 review-info">
                                <img className="review-img" src="../img/avatar.png" alt="" />
                                <div className="info">
                                    <h6>Name</h6>
                                    <p>Time</p>
                                </div>
                            </div>
                            <div className="col-9 review-content">
                                <ul className="review-rating">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <p>really cool , i think Edwin diaz best teacher and i really joy this crash course , please make a complete course of vuejs cause your way of understanding people is amazing</p>
                            </div>
                        </div>
                    </li>
                    <li className="review-section">
                        <div className="row">
                            <div className="col-3 review-info">
                                <img className="review-img" src="../img/avatar.png" alt="" />
                                <div className="info">
                                    <h6>Name</h6>
                                    <p>Time</p>
                                </div>
                            </div>
                            <div className="col-9 review-content">
                                <ul className="review-rating">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <p>really cool , i think Edwin diaz best teacher and i really joy this crash course , please make a complete course of vuejs cause your way of understanding people is amazing</p>
                            </div>
                        </div>
                    </li>
                    <li className="review-section">
                        <div className="row">
                            <div className="col-3 review-info">
                                <img className="review-img" src="../img/avatar.png" alt="" />
                                <div className="info">
                                    <h6>Name</h6>
                                    <p>Time</p>
                                </div>

                            </div>
                            <div className="col-9 review-content">
                                <ul className="review-rating">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <p>really cool , i think Edwin diaz best teacher and i really joy this crash course , please make a complete course of vuejs cause your way of understanding people is amazing</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <Repond></Repond>
            </div>
        )
    }
}
