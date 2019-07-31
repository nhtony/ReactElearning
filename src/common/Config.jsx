export const token = "accessToken";

export const loginInfo = "userLogin";

const GP = "GP01";

export const domain = "http://elearning0706.cybersoft.edu.vn/api/";

export const API_GET_COURSE_LIST = domain + `QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GP}`;


// ADMIN
export const API_GET_USER_LIST = domain + "QuanLyNguoiDung/LayDanhSachNguoiDung"

export const API_ADD_USER = domain + "QuanLyNguoiDung/ThemNguoiDung"

// USER
export const API_USER_SIGN_UP = domain + "QuanLyNguoiDung/DangKy"

export const API_USER_LOGIN = domain + "QuanLyNguoiDung/DangNhap"

export const setLocalStorage = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
}

export const getLocalStorage = (name, value) => {
    return JSON.parse(localStorage.getItem(name, value));
}