import * as types from '../contants/User.contant';
import { getLocalStorage, loginInfo } from '../../common/Config';

let initialState = {
    isLogin: getLocalStorage(loginInfo) ? true : false,
    profile: {},
};

const UserReducerStore = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_SIGN_UP:
            return { ...state };
        case types.USER_LOGIN:
            state.isLogin = true;
            return { ...state };
        case types.USER_PROFILE:
            state.profile = action.payload;
            return { ...state };
        case types.USER_LOG_OUT:
            state.isLogin = false;
            return { ...state };
        default:
            return { ...state };
    }
}
export default UserReducerStore;