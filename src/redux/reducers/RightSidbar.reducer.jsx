import * as types from '../contants/RightSidebar.contant';

let SidebarState = {
    isOpenLogin: false,
    isOpenSignUp: false
}

const RighSideBarStore = (state = SidebarState, action) => {
    switch (action.type) {
        case types.OPEN_SIDEBAR:
            if (action.data.isOpenLogin) {
                state.isOpenLogin = !state.isOpenLogin;
                state.isOpenSignUp = false;
            }
            if (action.data.isOpenSignUp) {
                state.isOpenSignUp = !state.isOpenSignUp;
                state.isOpenLogin = false;
            }
            return { ...state };
        default:
            state.isOpenSignUp = false;
            state.isOpenLogin = false;
            return { ...state };
    }
}
export default RighSideBarStore;