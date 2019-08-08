export const GP = "GP01";

export const setLocalStorage = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
}

export const getLocalStorage = (name) => {
    return JSON.parse(localStorage.getItem(name));
}

export const token = "accessToken";

export const loginInfo = "userLogin";

export const domain = "http://elearning0706.cybersoft.edu.vn/api/";

// ADMIN
export const API_GET_COURSE_LIST = domain + `QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GP}`;

export const API_GET_CATEGORIES = domain + "QuanLyKhoaHoc/LayDanhMucKhoaHoc";

export const API_GET_USER_LIST = domain + "QuanLyNguoiDung/LayDanhSachNguoiDung";

export const API_ADD_USER = domain + "QuanLyNguoiDung/ThemNguoiDung";

export const API_DELETE_USER = domain + "QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=";

export const API_EDIT_USER = domain + "QuanLyNguoiDung/CapNhatThongTinNguoiDung";

export const API_FIND_USER_BY_NAME = domain + "QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01";

export const API_ADD_COURSE = domain + "QuanLyKhoaHoc/ThemKhoaHoc";

export const API_EDIT_COURSE = domain + "QuanLyKhoaHoc/CapNhatKhoaHoc";

export const API_DELETE_COURSE = domain + "QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=";

export const API_UPLOAD_HINH = domain + "QuanLyKhoaHoc/UploadHinhAnhKhoaHoc";

export const API_GET_COURSE_INFORMATION = domain + "QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=";

export const API_FIND_COURSE_BY_NAME = domain + 'QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=';

// USER
export const API_USER_SIGN_UP = domain + "QuanLyNguoiDung/DangKy";

export const API_USER_LOGIN = domain + "QuanLyNguoiDung/DangNhap";

export const API_USER_PROFILE = domain + "QuanLyNguoiDung/ThongTinTaiKhoan";



