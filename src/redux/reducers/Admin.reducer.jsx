import * as types from '../contants/Admin.contant';
import { decodeToken } from '../../authen/DecodeToken'
import { loginInfo, getLocalStorage } from '../../common/Config';

let deVal = "";
if (getLocalStorage(loginInfo)) {
    const accesstoken = getLocalStorage(loginInfo).accessToken;
    deVal = Object.values(decodeToken(accesstoken));
}

let initialState = {
    isLogin: (deVal[1] === "GV") ? true : false
}

const AdminReducerStore = (state = initialState, action) => {
    switch (action.type) {
        case types.ADMIN_LOGIN:
            state.isLogin = true;
            return { ...state };
        case types.ADMIN_LOG_OUT:
            state.isLogin = false;
            return { ...state };
        default:
            return { ...state };
    }
}
export default AdminReducerStore;