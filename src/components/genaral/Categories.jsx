import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCateCourseAction } from '../../redux/actions/Courses.action';
class Categories extends Component {

    renderCategorie = () => {
        return this.props.Categories.map((item, index) => {
            return (<Link onClick={() => this.props.getCateCourses(item.maDanhMuc)} to={"/home/course/category/" + item.maDanhMuc + "/" + item.tenDanhMuc} key={index} className="dropdown-item">{item.tenDanhMuc}</Link>)
        })
    }

    render() {
        return (
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {this.renderCategorie()}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCateCourses: (cateID) => {
            return dispatch(getCateCourseAction(cateID));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        Categories: state.CoursesReducer.Categories
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)