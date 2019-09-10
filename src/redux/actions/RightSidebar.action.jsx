import * as types from '../contants/RightSidebar.contant';

export const sidebarAction = (data) => {
    return {
        type: types.OPEN_SIDEBAR,
        payload: data
    }
}

export const openAfterAction = () => {
    return {
        type: types.OPEN_AFTER_SIGN_UP
    }
}
