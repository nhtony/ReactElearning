import * as types from '../contants/RegisterUser.contant';
let regUser = {
    regUserList:[]
}
const RegisterUserReducerStore = (state = regUser, action) => {
    switch (action.type) {
        case types.GET_UNREGISTER_USERS:
            state.regUserList = action.data;
            return { ...state };
        default:
            return { ...state };
    }
}
export default RegisterUserReducerStore;