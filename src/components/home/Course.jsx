import React, { Component } from 'react'

export default class Course extends Component {
    render() {
        let { tenKhoaHoc, hinhAnh, moTa } = this.props.course;
        return (
            <div className="card" style={{ width: '90%', height: '18rem', margin: '0 auto' }}>
                <img className="card-img-top" style={{ height: '8rem' }} src={hinhAnh} alt=" " />
                <div className="card-body">
                    <h5 style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }} className="card-title">{tenKhoaHoc}</h5>
                    <p style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }} className="card-text">{moTa}</p>
                </div>
            </div>
        )
    }
}
