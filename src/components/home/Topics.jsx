import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCateCourseAction } from '../../redux/actions/Courses.action';
import ListTopicCourse from './ListTopicCourse';

const styles = {
    color: "#ffc600",
    borderBottom: '1.5px solid #ffc600'
}
class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allcourse: false,
            colorActive: 'all',
        }
      
    }
    render() {
        return (
            <section className="topic">
                <div className="container-fluid">
                    <div className="topic__title">
                        <span><em /></span>
                        <h2>CÁC KHÓA HỌC THEO DANH MỤC</h2>
                    </div>
                    <div className="topic__content">
                        <ul className="filter-menu nav nav-tabs">
                            <li style={(this.state.colorActive === 'all') ? styles : {}} className="nav-item m-3" onClick={() => { this.getAllCourse(); this.checkActive('all') }}>All</li>
                            {this.rendenCateItem()}
                        </ul>
                        <div className="filter-item container">
                            <ListTopicCourse  allcourse={this.state.allcourse}></ListTopicCourse>
                        </div>
                      
                    </div>
                </div>
            </section>
        )
    }

    rendenCateItem = () => {
        return this.props.Categories.map((item, index) => {
            return (
                <li style={(this.state.colorActive === item.maDanhMuc) ? styles : {}} className="nav-item m-3" key={index} onClick={() => { this.getCateCourse(item.maDanhMuc); this.checkActive(item.maDanhMuc) }}>{item.tenDanhMuc}</li>
            )
        })
    }

    checkActive = (id) => {
        switch (id) {
            case "BackEnd":
                this.setState({
                    colorActive: id
                })
                break;
            case "Design":
                this.setState({
                    colorActive: id
                })
                break;
            case "DiDong":
                this.setState({
                    colorActive: id
                })
                break;
            case "FrontEnd":
                this.setState({
                    colorActive: id
                })
                break;
            case "FullStack":
                this.setState({
                    colorActive: id
                })
                break;
            case "TuDuy":
                this.setState({
                    colorActive: id
                })
                break;
            default:
                this.setState({
                    colorActive: 'all'
                })
                break;

        }
    }

    getCateCourse = (idcate) => {
        this.setState({
            allcourse: false
        }, () => this.props.getCateCourses(idcate))
    }

    getAllCourse = () => {
        this.setState({
            allcourse: true
        });
    }

}
const mapStateToProps = (state) => {
    return {
        Categories: state.CoursesReducer.Categories,
        catCoursesLoaded: state.CoursesReducer.catCoursesLoaded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCateCourses: (cateID) => {
            return dispatch(getCateCourseAction(cateID));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topics);