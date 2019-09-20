import React from 'react'
import { zoomIn,slideInLeft,slideInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
const styles = {
    zoomIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
    },
    slideInLeft: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    },
    slideInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
    }
}


export default function Features() {
    return (
        <section className="features">
            <div className="features__content">
                <ul className="row">
                    <StyleRoot className="col-md-4">
                        <li style={styles.slideInLeft}>
                            <i className="fa fa-graduation-cap" />
                            <h4>+200 courses</h4><span>Explore a variety of fresh topics</span>
                        </li>
                    </StyleRoot>
                    <StyleRoot className="col-md-4">
                        <li style={styles.zoomIn}>
                            <i className="fa fa-star" />
                            <h4>Expert teachers</h4><span>Find the right instructor for you</span>
                        </li>
                    </StyleRoot>
                    <StyleRoot className="col-md-4">
                        <li style={styles.slideInRight}>
                            <i className="fa fa-bullseye" />
                            <h4>Focus on target</h4><span>Increase your personal expertise</span>
                        </li>
                    </StyleRoot>
                </ul>
            </div>
        </section>
    )
}
