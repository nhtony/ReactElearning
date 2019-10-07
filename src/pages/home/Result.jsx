import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { findCourseAction } from '../../redux/actions/Courses.action';
import { getDetailCourseAction } from '../../redux/actions/Course.action';
import { GridLoader } from 'react-spinners';
import { css } from '@emotion/core';
const override = css`
    display: block;
    margin: 0 auto;
`;

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: 3,
            loading: false
        };
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        this.props.findCourse(this.props.match.params.tkh);
    }

    loadMore() {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                visible: this.state.visible + 3,
                loading: false
            });
        }, 1000);
    }

    renderLoadMoreButton = () => {
        const { loading } = this.state;
        return (this.state.visible > this.props.courses.length) ? null : (<button disabled={false} className="load-more-btn" onClick={this.loadMore}>
            {loading && (
                <i className="fa fa-refresh fa-spin" style={{ marginRight: "5px" }} />
            )}
            {loading && <span>Loading...</span>}
            {!loading && <span>Load more</span>}
        </button>)
    }


    _linkToDetail = (maKhoaHoc) => {
        this.props.getInfoCourse(maKhoaHoc);
        this.props.history.push(`/home/course/detail/${maKhoaHoc}`);
    }

    _renderResult = () => (this.props.isLoading ? <GridLoader css={override}
        sizeUnit={"px"}
        size={30}
        color={'#123abc'} /> :
        this.props.courses.slice(0, this.state.visible).map((item, index) => (
            <div onClick={() => this._linkToDetail(item.maKhoaHoc)} style={{
                borderTop: '1px solid #dedfe0',
                paddingTop: 10,
                paddingBottom: 10,
            }} key={index} className="course-result d-flex">
                <div className="img-course col-3 p-0">
                    <img style={{
                        width: 210,
                        height: 140
                    }}
                        className="author-img" src={item.hinhAnh} alt="" />
                </div>
                <div className="course-info">
                    <h5>{item.tenKhoaHoc}</h5>
                    <p>{item.moTa}</p>
                    <p>{item.nguoiTao.hoTen}</p>
                </div>
            </div>
        ))
    )

    render() {
        return (
            <section className="result">
                <div className="archive__banner-top">
                    <div className="container">
                        <div className="archive__breadcrumbs">
                            <div className="breadcrumbs">
                                <span>
                                    <Link to='/home' className="home"><span itemProp="title">Trang chủ</span></Link>
                                </span><i className="fa fa-angle-right" />
                                <span>
                                    <Link to='/home'><span itemProp="title">Danh sách khóa học</span></Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 container">
                    {this.props.isNotFound ? <p className="text-center">{this.props.message}</p> : this._renderResult()}
                </div>
                <div className="text-center">
                    {this.renderLoadMoreButton()}
                </div>
            </section>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        findCourse: (name) => {
            dispatch(findCourseAction(name));
        },
        getInfoCourse: (idcourse) => {
            dispatch(getDetailCourseAction(idcourse));
        }
    }
}

const mapStateToProps = state => {
    return {
        courses: state.CoursesReducer.Result ? state.CoursesReducer.Result.courses : [],
        isNotFound: state.CoursesReducer.Result ? state.CoursesReducer.Result.isNotFound : false,
        message: state.CoursesReducer.Result ? state.CoursesReducer.Result.message : "",
        isLoading: state.CoursesReducer.isLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);