import * as types from '../contants/Users.contant';
let initialState = {
    Users: [],
    isSuccess: false,
    isNotFound: false,
}
const UsersReducerStore = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LIST_USER:
            state.Users = action.payload;
            state.isSuccess = false;
            return { ...state };

        case types.ADD_USER:
            state.isSuccess = action.status;
            return { ...state };

        case types.EDIT_USER:
            state.isSuccess = action.status;
            return { ...state };

        case types.DELETE_USER:
            state.Users = state.Users.filter(user => user.taiKhoan !== action.username);
            return { ...state };
            
        case types.FIND_USER:
            if (action.payload.length > 0) {
                let updateState = { ...state };
                updateState.Users = action.payload;
                updateState.isNotFound = false;
                return updateState;
            }
            else {
                let updateState = { ...state, message: "Không tìm thấy người dùng!" };
                updateState.isNotFound = true;
                return updateState;
            }
        default:
            return state;
    }
}
export default UsersReducerStore;