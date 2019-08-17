import * as types from '../contants/ListUser.contant';
let list = {
    Users: [],
    isSuccess: false
}
const UsersReducerStore = (state = list, action) => {
    switch (action.type) {
        case types.GET_LIST_USER: {
            state.Users = action.users;
            state.isSuccess = false;
            return { ...state };
        }
        case types.ADD_USER:
            {
                state.isSuccess = action.status;
                return { ...state };
            }
        case types.EDIT_USER:
            {
                state.isSuccess = action.status;
                return { ...state };
            }
        case types.DELETE_USER:
            {
                let updateState = [...state.Users];
                let index = updateState.findIndex(item => { return item.taiKhoan === action.username })
                if (index !== -1) {
                    updateState.splice(index, 1);
                }
                state.Users = updateState;
                return { ...state };
            }
        case types.FIND_USER:
            {
                let updateState = { ...state };
                updateState.Users = action.listSearch;
                return updateState;
            }
        default:
            return { ...state };
    }
}
export default UsersReducerStore;