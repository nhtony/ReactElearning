import { restConnector } from './Index.service';
import { getLocalStorage, adminLogin,listTypes } from '../common/Config';
class StudenetService {
    
    getList(idcourse, listType) {
        let uri = "";
        switch (listType) {
            case listTypes.student.isstudent:
                uri = 'QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc';
                break;
            case listTypes.student.notstudent:
                uri = 'QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh';
                break;
            case listTypes.student.waitinguser:
                uri = 'QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet';
                break;
            default:
                break;
        }
        return restConnector({
            method: 'POST',
            url: uri,
            data: {
                "MaKhoaHoc": idcourse
            },
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(adminLogin).accessToken
            }
        })
    }
    studentAction(idcourse, username, listType) {
        let uri = (listType === listTypes.student.isstudent) ? 'QuanLyKhoaHoc/HuyGhiDanh' : 'QuanLyKhoaHoc/GhiDanhKhoaHoc';
        let regObj = {
            "maKhoaHoc": idcourse,
            "taiKhoan": username
        }
        return restConnector({
            method: 'POST',
            url: uri,
            data: regObj,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(adminLogin).accessToken
            }
        })
    }
}
export default new StudenetService();