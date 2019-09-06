import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
class Categories extends Component {

    renderCategorie = () => {
        return this.props.Categories.map((item, index) => {
            return (<Link to={"/home/course-category/" + item.maDanhMuc +"/" + item.tenDanhMuc}  key={index} className="dropdown-item">{item.tenDanhMuc}</Link>)
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

const mapStateToProps = (state) => {
    return {
        Categories: state.CoursesReducer.Categories
    }
}

export default connect(mapStateToProps, null)(Categories)