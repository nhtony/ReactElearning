import * as types from '../contants/RightSidebar.contant';

export const closeLoginSidebarAction = (data) => {
    return {
        type: types.CLOSE_LOGIN_SIDEBAR,
        data
    }
}