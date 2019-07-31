import * as types from '../contants/RightSidebar.contant';

let toggleState = {
    isOpenLogin = false,
    isOpenSignUp = false
}

const RighSideBarStore = (state = toggleState, action) => {
    switch (action.type) {
        case types.CLOSE_LOGIN_SIDEBAR:
            state.isOpenLogin = action.data;
            return { ...state };
        default:
            return { ...state };
    }
}
export default RighSideBarStore;