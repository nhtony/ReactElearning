import * as types from '../contants/RightSidebar.contant';

export const sidebarAction = (data) => {
    return {
        type: types.OPEN_SIDEBAR,
        data
    }
}

