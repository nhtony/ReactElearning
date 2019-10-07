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

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
         
        }
    }

    _handleSubmit = event => {
        event.preventDefault();
        this.props.history.push(`/home/course/search/${this.state.keyword}`);
    }

    _handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <section className="banner">
                <StyleRoot>
                    <div className="container" style={styles.bounceInDown}>
                        <h3>What would you learn?</h3>
                        <p>Increase your expertise in business, technology and personal development</p>
                        <form onSubmit={this._handleSubmit}>
                            <div id="custom-search-input">
                                <div className="input-group">
                                    <input onChange={this._handleChange} type="text" className="search" name="keyword" placeholder="Ex. Architecture, Specialization..." />
                                    <button type="submit" className="btn_search">Tìm kiếm</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </StyleRoot>
            </section>
        )
    }
}

