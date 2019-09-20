import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { getCateCourseAction } from '../../redux/actions/Courses.action';
import { Link } from 'react-router-dom';

class ListCateItem extends PureComponent {

    rendenCateItem = () => {
        return this.props.Categories.map((item, index) => {
            return (
                <li key={index} className="cate-item ">
                    <Link onClick={() => this.props.getCateCourses(item.maDanhMuc)} to={`/home/course/category/${item.maDanhMuc}/${item.tenDanhMuc}`}>{item.tenDanhMuc}</Link>
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-cate col-10">
                {this.rendenCateItem()}
            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Categories: state.CoursesReducer.Categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCateCourses: (cateID) => {
            return dispatch(getCateCourseAction(cateID));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCateItem);