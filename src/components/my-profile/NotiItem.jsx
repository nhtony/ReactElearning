import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getLocalStorage, userLogin } from '../../common/Config';
import { readNoifyAction } from '../../redux/actions/Students.action';
class NotiItem extends Component {
    render() {
        const { hinhAnh, maKhoaHoc, tenKhoaHoc } = this.props.course;
        const { taiKhoan } = getLocalStorage(userLogin);
        return (
            <div className="notify-item">
                <a href={`/home/my/player/${maKhoaHoc}`} className="row notify-item__content" onClick={() => this.props.readNotify(tenKhoaHoc, taiKhoan)}>
                    <div className="col-1">
                        <div className="avatar">
                            {/* <img src={hinhAnh} alt="" /> */}
                        </div>
                    </div>
                    <div className="col-11 col-text">
                        {tenKhoaHoc}  {this.props.notiContents.slice(0, 1).map(item => (item.content))}
                    </div>
                </a>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        readNotify: (tenKhoaHoc, taiKhoan) => {
            return (dispatch(readNoifyAction(tenKhoaHoc, taiKhoan)))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        notiContents: state.StudentsReducer.notiContents
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotiItem)