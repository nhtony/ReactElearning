import React, { Component } from 'react'
import { bounceInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    bounceInDown: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
    }
}
export default class Banner extends Component {
    render() {
        return (
            <section className="banner">
                <StyleRoot>
                    <div className="container" style={styles.bounceInDown}>
                        <h3>What would you learn?</h3>
                        <p>Increase your expertise in business, technology and personal development</p>
                    </div>
                </StyleRoot>
            </section>
        )
    }
}
