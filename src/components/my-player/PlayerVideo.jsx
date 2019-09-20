import React, { Component } from 'react';
import ReactPlayer from 'react-player';
export default class PlayerVideo extends Component {
    render() {
        const url = (this.props.url) ? this.props.url : this.props.defaultUrl;
        return (
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url={url}
                    width='100%'
                    height='100%'
                />
            </div>
        )
    }
}
