import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Course extends Component {
    render() {
        const style = {
            title: {
                color: '#3f51b5',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            },
            name: {
                marginBottom: 5,
                color: '#999',
                fontSize: 14
            },
            overflow: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            },
            infor: {
                textAlign: 'right',
            }
        }
        let { tenKhoaHoc, hinhAnh, moTa, nguoiTao, maKhoaHoc } = this.props.course;
        return (
            <div className="card" style={{ width: '90%', height: '18rem', margin: '0 auto' }}>
                <Link to={"/home/course-detail/" + maKhoaHoc}>
                    <img className="card-img-top" style={{ height: '8rem' }} src={hinhAnh} alt=" " />
                </Link>
                <div className="card-body">
                    <Link to={"/home/course-detail/" + maKhoaHoc} style={{ textDecoration: 'none' }}><h5 style={style.title} className="card-title">{tenKhoaHoc}</h5></Link>
                    <p style={style.name} className="author-name">{nguoiTao.hoTen}</p>
                    <p style={style.overflow} className="card-text">{moTa}</p>
                    <div style={style.infor} className="card-infor">
                        <span style={{ color: '#3f51b5', marginRight: 5 }}><i className="fa fa-user mr-1"></i>4</span>
                        <span style={{ color: '#3f51b5' }}><i className="fa fa-eye mr-1"></i>5</span>
                    </div>
                </div>
            </div >
        )
    }
}
