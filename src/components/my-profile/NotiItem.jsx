import React, { Component } from 'react'
import { connect } from 'react-redux';

import { readNoifyAction } from '../../redux/actions/Students.action';


class NotiItem extends Component {

    render() {
        const { maKhoaHoc, tenKhoaHoc, hinhAnh, taiKhoan, content } = this.props.notification
        return (
            <div className="notify-item">
                <a href={`/home/my/player/${maKhoaHoc}`} className="row notify-item__content" onClick={() => this.props.readNotify(taiKhoan, maKhoaHoc)}>
                    <div className="col-1">
                        <div className="avatar">
                            <img src={hinhAnh} alt="" />
                        </div>
                    </div>
                    <div className="col-11 col-text">
                        {tenKhoaHoc} {content}
                    </div>
                </a>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        readNotify: (tenKhoaHoc, maKhoaHoc) => {
            return (dispatch(readNoifyAction(tenKhoaHoc, maKhoaHoc)))
        }
    }
}

export default connect(null, mapDispatchToProps)(NotiItem)