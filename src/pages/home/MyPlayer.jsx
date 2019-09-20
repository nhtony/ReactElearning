import React, { Component } from 'react'
import PlayerVideo from '../../components/my-player/PlayerVideo'
import PlayerTabs from '../../components/my-player/PlayerTabs'
import { courseContent } from '../../common/CourseService';
export default class MyPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: ''
        }
    }



    render() {
        const {lesson} = (courseContent.hasOwnProperty(this.props.match.params.mkh)) ? courseContent[this.props.match.params.mkh] : { lesson: [] };
        return (
            <section className='my-player-page'>
                <div className="player-video">
                    <PlayerVideo defaultUrl={lesson[0].content[0].url} url={this.state.url} maKH={this.props.match.params.mkh}></PlayerVideo>
                </div>
                <PlayerTabs getVideoUrl={this.getVideoUrl} maKH={this.props.match.params.mkh}></PlayerTabs>
            </section>
        )
    }

    getVideoUrl = (videoUrl) => {
        this.setState({
            url: videoUrl
        })
    }

}
