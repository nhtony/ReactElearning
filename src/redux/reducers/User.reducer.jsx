import * as types from '../contants/User.contant';
import { getLocalStorage, loginInfo } from '../../common/Config';

let User = {
    isLogin: getLocalStorage(loginInfo) ? true : false
};

const UserReducerStore = (state = User, action) => {
    switch (action.type) {
        case types.USER_SIGN_UP:
            return { ...state };
        case types.USER_LOGIN:
            state.isLogin = true;
            return { ...state };
        case types.USER_PROFILE:
            let updateState = { ...state, userProfile: action.userProfile };
            return updateState;
        default:
            return { ...state };
    }
}
export default UserReducerStore;