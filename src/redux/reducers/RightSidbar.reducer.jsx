import * as types from '../contants/RightSidebar.contant';

let initialState = {
    isOpenLogin: false,
    isOpenSignUp: false
}

const RighSideBarStore = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_SIDEBAR:
            if (action.payload.isOpenLogin) {
                state.isOpenLogin = !state.isOpenLogin;
                state.isOpenSignUp = false;
            }
            if (action.payload.isOpenSignUp) {
                state.isOpenSignUp = !state.isOpenSignUp;
                state.isOpenLogin = false;
            }
            return { ...state };
        case types.OPEN_AFTER_SIGN_UP:
            state.isOpenLogin = true;
            state.isOpenSignUp = false;
            return { ...state };
        default:
            return { ...state };
    }
}
export default RighSideBarStore;