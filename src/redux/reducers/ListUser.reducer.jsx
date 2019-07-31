import * as types from '../contants/ListUser.contant';

let Users = [];

const UsersReducerStore = (state = Users, action) => {
    switch (action.type) {
        case types.GET_LIST_USER: {
            let updateState = [...action.users];
            return updateState;
        }
        case types.ADD_USER:
            {
                let updateState = [...state.Users, action.user];
                return [...updateState];
            }
        default:
            return [...state];
    }
}
export default UsersReducerStore;