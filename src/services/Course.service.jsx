import { restConnector } from './Index.service';
import { getLocalStorage, adminLogin, listTypes } from '../common/Config';

const PAGE_INDEX = 1;
const ITEMS_PER_PAGE = 4;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW5oYW8iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJHViIsIm5iZiI6MTU2ODIwNzIzOCwiZXhwIjoxNTY4MjEwODM4fQ.1YfkMFGVjQE74p3MJkfTPydEZ4n59Pp3npffYjl9vA4";

class CourseService {
    fetchCourses() {
        return restConnector({
            url: 'QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09',
            method: "GET"
        });
    }
    addCourse(course) {
        return restConnector({
            method: 'POST',
            url: 'QuanLyKhoaHoc/ThemKhoaHoc',
            data: course,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(adminLogin).accessToken
            }
        });
    }
    uploadFile(formdata) {
        return restConnector({
            method: 'POST',
            url: "QuanLyKhoaHoc/UploadHinhAnhKhoaHoc",
            data: formdata
        })
    }
    editCourse(courseEdit) {
        return restConnector({
            method: 'PUT',
            url: "QuanLyKhoaHoc/CapNhatKhoaHoc",
            data: courseEdit,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(adminLogin).accessToken
            }
        })
    }
    deleleCourse(idcourse) {
        return restConnector({
            method: 'DELETE',
            url: `QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${idcourse}`,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(adminLogin).accessToken
            }
        })
    }
    findCourse(name) {
        return restConnector({
            method: 'GET',
            url: `QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${name}&MaNhom=GP09`
        })
    }
    getCategories() {
        return restConnector({
            method: 'GET',
            url: "QuanLyKhoaHoc/LayDanhMucKhoaHoc"
        })
    }
    getCourseByCategory(cateID) {
        return restConnector({
            method: 'GET',
            url: `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${cateID}&MaNhom=GP09`
        })
    }
    getCourseDetail(idcourse) {
        return restConnector({
            method: 'GET',
            url: `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${idcourse}`
        })
    }
    getListCourse(username, listType) {
        let url = "";
        switch (listType) {
            case listTypes.course.isenroll:
                url = 'QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet';
                break;
            case listTypes.course.notenroll:
                url = "QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh";
                break;
            case listTypes.course.waitingenroll:
                url = 'QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet';
                break;
            default:
                break;
        }
        return restConnector({
            method: 'POST',
            url: url,
            data: {
                "taiKhoan": username
            },
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(adminLogin).accessToken
            }
        })
    }
    getMyCourses(username) {
        return restConnector({
            method: 'POST',
            url: "QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet",
            data: {
                "taiKhoan": username
            },
            headers:
            {
                "Authorization": "Bearer " +
                    token
            }
        })
    }
    getWaitingCourse(username) {
        return restConnector({
            method: 'POST',
            url: "QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet",
            data: {
                "taiKhoan": username
            },
            headers:
            {
                "Authorization": "Bearer " +
                    token
            }
        })
    }
    courseAction(idcourse, username, listType) {
        let uri = (listType === listTypes.course.isenroll) ? 'QuanLyKhoaHoc/HuyGhiDanh' : 'QuanLyKhoaHoc/GhiDanhKhoaHoc';
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

    fetchCoursesPagination(pageIndex = PAGE_INDEX, itemsPerPage = ITEMS_PER_PAGE) {
        return restConnector({
          url: `QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${pageIndex}&pageSize=${itemsPerPage}&MaNhom=GP09`,
          method: "GET"
        });
      }
}
export default new CourseService();