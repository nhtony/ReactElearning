import * as types from '../contants/Students.contant';
import { setLocalStorage, getLocalStorage, userLogin } from '../../common/Config';

const { taiKhoan } = getLocalStorage(userLogin);

let initialState = {
    list: [],
    notiContents: (localStorage.getItem(taiKhoan)) ? getLocalStorage(taiKhoan) : [],
};

const StudentsReducerStore = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_STUDENTS:
            state.list = action.payload;
            return { ...state }
        case types.GET_UNRESGISTERED_USER:
            state.list = action.payload;
            return { ...state }
        case types.GET_WATTING_USER:
            state.list = action.payload;
            return { ...state }
        case types.ENROLL:
            state.list = state.list.filter(item => item.taiKhoan !== action.payload);
            return { ...state };
        case types.DISENROLL:
            state.list = state.list.filter(item => item.taiKhoan !== action.payload);
            return { ...state };
        case types.SET_NOTIFY:
            state.notiContents.push(action.payload.noti);
            setLocalStorage(action.payload.taiKhoan, state.notiContents);
            return { ...state };
        case types.READ_NOTIFY:
            let index = state.notiContents.findIndex(item => item.tenKhoaHoc === action.payload.tenKhoaHoc);
            if (index !== -1) {
                state.notiContents.splice(index, 1);
            }
            setLocalStorage(action.payload.taiKhoan, state.notiContents);
            return { ...state };
        default:
            return { ...state };
    }
}

export default StudentsReducerStore;