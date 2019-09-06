import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import LoadingService from '../common/LoadingService';


export default class CourseCategoryTemplate extends Component {

    getParams = () => {
        return this.props.match.params;
    }
    render() {
        const CourseCategory = lazy(() => {
            return new Promise(resolve => {
                setTimeout(() => resolve(import('../pages/home/CourseCategory')), 500)
            })
        });
        const params = this.getParams();
        return (
            <BrowserRouter>
                <Suspense fallback={<LoadingService />}>
                    <Route exact path={''} render={(props) => <CourseCategory categoryInfor={params} {...props} />} ></Route>
                </Suspense>
            </BrowserRouter>
        )
    }
}

