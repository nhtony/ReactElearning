import * as types from '../contants/Students.contant';
import { setLocalStorage, getLocalStorage, userLogin } from '../../common/Config';

const { taiKhoan } = getLocalStorage(userLogin);

let initialState = {
    list: [],
    notiContents: [],
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
            if (localStorage.getItem(taiKhoan)) {
                let newLocal = JSON.parse(localStorage.getItem(action.payload.taiKhoan));
                newLocal.notification.push(action.payload.noti);
                let index = newLocal.require.findIndex(item => item.maKhoaHoc === action.payload.noti.maKhoaHoc);
                if (index !== -1) {
                    newLocal.require.splice(index, 1);
                }
                setLocalStorage(action.payload.taiKhoan, { ...newLocal });
            }
            else {
                state.notiContents.push(action.payload.noti);
                setLocalStorage(action.payload.taiKhoan, { require: [], notification: state.notiContents });
            }
            return { ...state };
        case types.READ_NOTIFY:
            if (localStorage.getItem(action.payload.taiKhoan)) {
                let newLocal = JSON.parse(localStorage.getItem(action.payload.taiKhoan));
                let index = newLocal.notification.findIndex(item => item.maKhoaHoc === action.payload.maKhoaHoc);
                if (index !== -1) {
                    newLocal.notification.splice(index, 1);
                }
                setLocalStorage(action.payload.taiKhoan, { ...newLocal });
            }
            return { ...state };
        default:
            return { ...state };
    }
}

export default StudentsReducerStore;