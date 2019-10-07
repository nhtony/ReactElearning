import React, { Component } from 'react'
import ProfileAside from '../../components/my-profile/ProfileAside'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfileMain from '../../components/my-profile/ProfileMain';
import AccountMain from '../../components/my-profile/AccountMain';
import Notification from '../../components/my-profile/Notification';
import { connect } from 'react-redux';
import { getProfileAction } from '../../redux/actions/User.action';
import LoadingService from '../../common/LoadingService';
import { getListCourseAction } from '../../redux/actions/Courses.action';
import {getLocalStorage,userLogin} from '../../common/Config';


class MyProfile extends Component {

    componentDidMount() {
        this.props.getCourse();
        const {taiKhoan,accessToken} = getLocalStorage(userLogin);
        this.props.getProfile(taiKhoan,accessToken);
    }

    render() {
        return (this.props.profileLoaded) ? (
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
        ) : <LoadingService></LoadingService>
    }
}
const mapStateToProps = (state) => {
    return {
        profileLoaded: state.UserReducer.profileLoaded
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (username,token) => {
            dispatch(getProfileAction(username,token));
        },
        getCourse: () => {
            dispatch(getListCourseAction());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);