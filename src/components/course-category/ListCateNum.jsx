import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { getCoursesByCatogoryAction, getCategoriesAction } from '../../redux/actions/Courses.action';

class ListCateNum extends PureComponent {
    
    numberofCateCourse = [];

    componentDidUpdate() {

    }
    componentWillMount() {

    }

    componentDidMount() {
        this.props.getCategories();
        this.props.Categories.map((item) => {
            return this.props.getCateCourses(item.maDanhMuc);
        })
    }

    renderNumCateItem = () => {
        return this.numberofCateCourse.map((item, index) => {
            return (
                <li key={index}>({item})</li>
            )
        })
    }
    render() {

        return (
            <ul className="list-num col-2">
                {this.renderNumCateItem()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        Categories: state.CoursesReducer.Categories,
        CateCourses: state.CoursesReducer.CategoryCourses

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCateCourses: (cateID) => {
            return dispatch(getCoursesByCatogoryAction(cateID));
        },
        getCategories: () => {
            return dispatch(getCategoriesAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCateNum);