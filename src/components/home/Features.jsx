import React from 'react'

export default function Features() {
    return (
        <section className="features">
            <div className="features__content">
                <ul className="row">
                    <li className="col-md-4">
                        <i className="fa fa-graduation-cap" />
                        <h4>+200 courses</h4><span>Explore a variety of fresh topics</span>
                    </li>
                    <li className="col-md-4">
                        <i className="fa fa-star" />
                        <h4>Expert teachers</h4><span>Find the right instructor for you</span>
                    </li>
                    <li className="col-md-4">
                        <i className="fa fa-bullseye" />
                        <h4>Focus on target</h4><span>Increase your personal expertise</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}
