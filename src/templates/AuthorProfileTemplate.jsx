import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import LoadingService from '../common/LoadingService';
export default class AuthorProfileTemplate extends Component {

    getParams = () => {
        return this.props.match.params;
    }
    
    render() {
        const AuthorProfile = lazy(() => {
            return new Promise(resolve => {
                setTimeout(() => resolve(import('../pages/home/AuthorProfile')), 500)
            })
        });
        const params = this.getParams();
        return (
            <BrowserRouter>
                <Suspense fallback={<LoadingService />}>
                    <Route exact path={''} render={(props) => <AuthorProfile params={params} {...props} />}></Route>
                </Suspense>
            </BrowserRouter>
        )
    }
}
