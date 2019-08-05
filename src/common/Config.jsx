export const token = "accessToken";

export const loginInfo = "userLogin";

const GP = "GP01";

export const domain = "http://elearning0706.cybersoft.edu.vn/api/";

export const API_GET_COURSE_LIST = domain + `QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GP}`;


// ADMIN
export const API_GET_USER_LIST = domain + "QuanLyNguoiDung/LayDanhSachNguoiDung";

export const API_ADD_USER = domain + "QuanLyNguoiDung/ThemNguoiDung";

export const API_DELETE_USER = domain + "QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=";

export const API_EDIT_USER = domain + "QuanLyNguoiDung/CapNhatThongTinNguoiDung";

export const API_FIND_USER_BY_NAME = domain + "QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=";


// USER
export const API_USER_SIGN_UP = domain + "QuanLyNguoiDung/DangKy";

export const API_USER_LOGIN = domain + "QuanLyNguoiDung/DangNhap";

export const API_USER_PROFILE = domain + "QuanLyNguoiDung/ThongTinTaiKhoan";

export const setLocalStorage = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
}

export const getLocalStorage = (name) => {
    return JSON.parse(localStorage.getItem(name));
}