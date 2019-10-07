import * as types from '../contants/User.contant';
import { getLocalStorage, userLogin } from '../../common/Config';

let initialState = {
    isLogin: getLocalStorage(userLogin).accessToken ? true : false,
    profile: {},
};

const UserReducerStore = (state = initialState, action) => {
    switch (action.type) {
        // Đăng ký
        case types.USER_SIGN_UP['SUCCESS']:
            return { ...state, isSuccess: true };
        case types.USER_SIGN_UP['REQUEST']:
            return { ...state, isSuccess: false };
        //Đăng nhập
        case types.USER_LOGIN['SUCCESS']:
            state.isLogin = true;
            return { ...state };
        //Lấy thông tin người dùng
        case types.USER_PROFILE['SUCCESS']:
            state.profile = action.payload;
            return { ...state, profileLoaded: true };
        case types.USER_PROFILE['REQUEST']:
            return { ...state, profileLoaded: false };
        //Dang ky khoa hoc
        case types.USER_ENROLL['SUCCESS']:
            return { ...state, enrollLoading: true };
        case types.USER_ENROLL['REQUEST']:
            return { ...state, enrollLoading: false };
        //Đăng xuất
        case types.USER_LOG_OUT:
            state.isLogin = false;
            return { ...state };
        default:
            return { ...state, isSuccess: false };
    }
}
export default UserReducerStore;