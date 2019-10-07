import React, { Component } from 'react'
import { connect } from 'react-redux';
import Zoom from 'react-reveal/Zoom';
import CourseItem from '../common/CourseItem';
let arrCourse = [];
class ListTopicCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: 8,
            loading: false
        }
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                visible: this.state.visible + 8,
                loading: false
            });
        }, 800);
    }

    renderLoadMoreButton = () => {
        const { loading } = this.state;
        return (this.state.visible > arrCourse.length) ? null : (<button disabled={false} className="load-more-btn " onClick={this.loadMore}>
            {loading && (
                <i className="fa fa-refresh fa-spin" style={{ marginRight: "5px" }} />
            )}
            {loading && <span>Loading...</span>}
            {!loading && <span>Load more</span>}
        </button>)
    }

    renderTopicCourse = () => {
        return arrCourse.slice(0, this.state.visible).map((item, index) => {
            return (
                <div className="col-3 mb-3" key={index}>
                    <CourseItem courseContent={item} />
                </div>
            )
        })
    }

    componentWillMount() {
        arrCourse = this.props.Courses;
    }

    componentWillReceiveProps(nextProps) {
        arrCourse = (nextProps.allcourse) ? nextProps.Courses : nextProps.CateCourses;
    }

    render() {
        return (
            <>
                <Zoom bottom cascade>
                    <div className="row">
                        {this.renderTopicCourse()}
                    </div>
                </Zoom>
                <div className="text-center mt-3">
                    {this.renderLoadMoreButton()}
                </div>

            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Courses: state.CoursesReducer.Courses,
        CateCourses: state.CoursesReducer.CategoryCourses
    }
}
export default connect(mapStateToProps, null)(ListTopicCourse);