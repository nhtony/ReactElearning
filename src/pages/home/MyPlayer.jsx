import React, { Component } from 'react'
import PlayerVideo from '../../components/my-player/PlayerVideo'
import PlayerTabs from '../../components/my-player/PlayerTabs'
import { courseContent } from '../../common/CourseService';
import { connect } from 'react-redux';
import { getListCourseAction } from '../../redux/actions/Courses.action';
import LoadingService from '../../common/LoadingService';
class MyPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: ''
        }
    }

    componentDidMount(){
        this.props.getCourse();
    }

    render() {
        const { lesson } = (courseContent.hasOwnProperty(this.props.match.params.mkh)) ? courseContent[this.props.match.params.mkh] : { lesson: [] };
        return (this.props.coursesLoaded) ? (
            <section className='my-player-page'>
                <div className="player-video">
                    <PlayerVideo defaultUrl={lesson[0].content[0].url} url={this.state.url} maKH={this.props.match.params.mkh}></PlayerVideo>
                </div>
                <PlayerTabs getVideoUrl={this.getVideoUrl} maKH={this.props.match.params.mkh}></PlayerTabs>
            </section>
        ) : <LoadingService></LoadingService>
    }

    getVideoUrl = (videoUrl) => {
        this.setState({
            url: videoUrl
        })
    }

}
const mapStateToProps = (state) => {
    return {
        coursesLoaded: state.CoursesReducer.coursesLoaded
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        getCourse: () => {
            dispatch(getListCourseAction());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyPlayer);