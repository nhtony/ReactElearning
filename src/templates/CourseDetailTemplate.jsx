import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import LoadingService from '../common/LoadingService';
import { connect } from 'react-redux';
import { getInfoCourseAction } from '../redux/actions/Course.action';

class CourseDetailTemplate extends Component {

    componentDidMount() {
        this.props.getInfoCourse(this.props.match.params.mkh);
    }

    render() {
        const CourseDetail = lazy(() => {
            return new Promise(resolve => {
                setTimeout(() => resolve(import('../pages/home/CourseDetail')), 500)
            })
        });

        return (
            <BrowserRouter>
                <Suspense fallback={<LoadingService />}>
                    <Route exact path={''} component={CourseDetail}></Route>
                </Suspense>
            </BrowserRouter>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInfoCourse: (idcourse) => {
            dispatch(getInfoCourseAction(idcourse));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        courseDetail: state.CourseReducer.courseDetail,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailTemplate);