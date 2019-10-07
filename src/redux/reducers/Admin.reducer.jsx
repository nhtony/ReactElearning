import * as types from '../contants/Admin.contant';
import { adminLogin, getLocalStorage } from '../../common/Config';


let initialState = {
    isLogin: getLocalStorage(adminLogin).accessToken ? true : false
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