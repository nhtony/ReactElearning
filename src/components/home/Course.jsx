import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Course extends Component {
    render() {
        let { tenKhoaHoc, hinhAnh, moTa, maKhoaHoc } = this.props.course;
        return (
            <div className="card" style={{ width: '90%', margin: '0 auto' }}>
                <img className="card-img-top" src={hinhAnh} alt=" " />
                <div className="card-body">
                    <h5 className="card-title">{tenKhoaHoc}</h5>
                    <p className="card-text">{moTa}</p>
                    <Link to={'/chitiet/' + maKhoaHoc} className="btn btn-primary">Xem chi tiết</Link>
                </div>
            </div>
        )
    }
}
