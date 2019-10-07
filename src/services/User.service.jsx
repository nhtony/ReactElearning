import { restConnector } from './Index.service';
import { getLocalStorage, adminLogin,userLogin } from '../common/Config';
class UserService {
    fetchUsers() {
        return restConnector({
            method: 'GET',
            url: 'QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09'
        })
    }
    addUser(user) {
        return restConnector({
            method: 'POST',
            url: "QuanLyNguoiDung/ThemNguoiDung",
            data: user,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(adminLogin).accessToken
            }
        })

    }
    editUser(userEdit) {
        return restConnector({
            method: 'PUT',
            url: "QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            data: userEdit,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(adminLogin).accessToken
            }
        })
    }
    deleteUser(username){
        return restConnector({
            method: 'DELETE',
            url: `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${username}`,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(adminLogin).accessToken
            }
        })
    }
    findUser(name){
        return restConnector({
            method: 'DELETE',
            url: `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP09&tuKhoa=${name}`,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(adminLogin).accessToken
            }
        })
    }
    signUp(userInfo){
        return restConnector({
            method: 'POST',
            url: "QuanLyNguoiDung/DangKy",
            data: userInfo
        }) 
    }
    login(userInfo){
        return restConnector({
            method: 'POST',
            url: "QuanLyNguoiDung/DangNhap",
            data: userInfo
        }) 
    }
    getProfilte(username,accessToken){
        return restConnector({
            method: 'POST',
            url: "QuanLyNguoiDung/ThongTinTaiKhoan",
            data: {
                "taiKhoan": username
            },
            headers: {
                "Authorization": "Bearer  " + accessToken
            }
        }) 
    }
    enrollCourse(data){
        return restConnector({
            method: 'POST',
            url: "QuanLyKhoaHoc/DangKyKhoaHoc",
            data: data,
            headers: {
                "Authorization": "Bearer  " + getLocalStorage(userLogin).accessToken
            }
        })
      
    }
}
export default new UserService();