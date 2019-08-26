//common
export const GP = "GP09";

export const loginInfo = "userLogin";

export const domain = "http://elearning0706.cybersoft.edu.vn/api/";

export const listTypes = {
    student: {
        isstudent: 'ST',
        notstudent: 'NST',
        waitinguser: 'APU'
    },
    course: {
        isenroll: 'EN',
        notenroll: 'NEN',
        waitingenroll: 'WEN'
    }
}

// *** ADMIN ***

// + COURSES
export const API_GET_COURSE_LIST = domain + `QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GP}`;

export const API_ADD_COURSE = domain + "QuanLyKhoaHoc/ThemKhoaHoc";

export const API_EDIT_COURSE = domain + "QuanLyKhoaHoc/CapNhatKhoaHoc";

export const API_DELETE_COURSE = domain + "QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=";

export const API_FIND_COURSE_BY_NAME = domain + 'QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=';

export const API_GET_CATEGORIES = domain + "QuanLyKhoaHoc/LayDanhMucKhoaHoc";

export const API_UPLOAD_HINH = domain + "QuanLyKhoaHoc/UploadHinhAnhKhoaHoc";

export const API_GET_USER_LIST = domain + `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GP}`;

export const API_ADD_USER = domain + "QuanLyNguoiDung/ThemNguoiDung";

export const API_DELETE_USER = domain + "QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=";

export const API_EDIT_USER = domain + "QuanLyNguoiDung/CapNhatThongTinNguoiDung";

export const API_FIND_USER_BY_NAME = domain + `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GP}`;

// + COURSE
export const API_GET_COURSE_INFORMATION = domain + "QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=";

export const API_GET_NOT_ENROLL_COURSES = domain + "QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh";

export const API_GET_WAITING_COURSES = domain + 'QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet';

export const API_GET_ENROLL_COURSES = domain + 'QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet';


// + STUDENT
export const API_GET_UNREGISTERED_USERS = domain + 'QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh';

export const API_GET_STUDENT_OF_COURSE = domain + 'QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc';

export const API_GET_WATTING_USERS = domain + 'QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet';

export const API_ENROLL = domain + 'QuanLyKhoaHoc/GhiDanhKhoaHoc';

export const API_DISENROLL = domain + 'QuanLyKhoaHoc/HuyGhiDanh';


//  *** USER ***
export const API_USER_SIGN_UP = domain + "QuanLyNguoiDung/DangKy";

export const API_USER_LOGIN = domain + "QuanLyNguoiDung/DangNhap";

export const API_USER_PROFILE = domain + "QuanLyNguoiDung/ThongTinTaiKhoan";

// storage
export const setLocalStorage = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
}

export const getLocalStorage = (name) => {
    return JSON.parse(localStorage.getItem(name));
}

export const userLogoutStorage = () => {
    localStorage.removeItem(loginInfo);
}



