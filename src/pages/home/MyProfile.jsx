import React, { Component } from 'react'
import ProfileAside from '../../components/my-profile/ProfileAside'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfileMain from '../../components/my-profile/ProfileMain';
import AccountMain from '../../components/my-profile/AccountMain';
import Notification from '../../components/my-profile/Notification';
export default class MyProfile extends Component {

    render() {
        return (
            <BrowserRouter>
                <section className="my-profile-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <ProfileAside></ProfileAside>
                            </div>
                            <div className="col-9">
                                <div className="my-main-profile">
                                    <Switch>
                                        <Route path={'/home/my/profile/account/:tk'} component={AccountMain}></Route>
                                        <Route path={'/home/my/profile/notification/:tk'} component={Notification}></Route>
                                        <Route path={''} render={(props) => <ProfileMain tk={this.props.match.params.tk} {...props} />}></Route>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </BrowserRouter>
        )
    }
}
