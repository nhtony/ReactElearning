import React, { Component } from 'react'
import Slider from "react-slick";
export default class Reviews extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay:true,
            autoplaySpeed: 5000
        };
        return (
            <section className="review">
                <h2>Students Review</h2>
                <div className="review-carousel">
                    <Slider {...settings}>
                        <div className="student">
                            <div className="info">
                                <h4 className="studentName">John</h4>
                                <p className="comment">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus similique neque
                                    odio impedit. Vero in blanditiis, mollitia harum facere dolorum veritatis eveniet
                                </p>
                                <span>Student</span>
                            </div>
                            <div className="avatar">
                                <img src="./img/1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="student">
                            <div className="info">
                                <h4 className="studentName">Trancy</h4>
                                <p className="comment">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet velit deleniti voluptatum possimus adipisci ex voluptatem aspernatur ducimus culpa eius quis doloremque quia quisquam porro, provident, aliquam molestiae voluptatibus blanditiis!
                                </p>
                                <span>Student</span>
                            </div>
                            <div className="avatar">
                                <img src="./img/2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="student">
                            <div className="info">
                                <h4 className="studentName">Micheal</h4>
                                <p className="comment">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dolorum aspernatur, sed id amet harum voluptatem illum corporis. Explicabo labore inventore voluptatem. Sunt alias ex perspiciatis nihil tenetur dolorum quidem.
                                </p>
                                <span>Student</span>
                            </div>
                            <div className="avatar">
                                <img src="./img/3.jpg" alt="" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }
}
