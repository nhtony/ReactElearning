import React, { Component } from 'react'
import Tabs from '../../components/admin/Tabs';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotiDetail from './NotiDetail';
export default class AdminNotification extends Component {
    render() {
        return (
            <BrowserRouter>
                <section>
                    <Switch>
                        <Route path={'/admin/notification/:tk/:mkh'} render={(props) => <NotiDetail  {...props} />}></Route>
                        <Route path={''} render={(props) => <Tabs  {...props} />}></Route>
                    </Switch>
                </section>
            </BrowserRouter>
        )
    }
}
