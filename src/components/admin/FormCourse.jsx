import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addCourseAction, editCourseAction, getCategoriesAction } from '../../redux/actions/ListCourse.action';

class FormCourse extends Component {

    file = '';
    isEdit = this.props.form.status;
    title = this.props.form.formTitle;

    constructor(props) {
        super(props);
        this.state = {
            maKhoaHoc: "",
            biDanh: "",
            tenKhoaHoc: "",
            moTa: "",
            luotXem: 0,
            danhGia: 0,
            hinhAnh: "",
            maNhom: "",
            ngayTao: "",
            maDanhMucKhoaHoc: "",
            nguoiTao: {
                taiKhoan: '',
            }
        }
    }

    handleOnchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        if (event.target.name === 'luotXem' || event.target.name === "danhGia") {
            this.setState({
                [event.target.name]: parseInt(event.target.value)
            })
        }
    }

    // handleDate = (event) => {
    //     let date = event.target.value;
    //     let d = date.replace('-', '/');
    //     let x = d.replace('-', '/');
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    //     // this.setState({
    //     //     [event.target.name]: x
    //     // })
    //     console.log("TCL: FormCourse -> handleDate -> x", this.state.ngayTao)
    // }

    uploadHinhAnh = (event) => {
        this.file = event.target.files[0];
        this.setState({
            hinhAnh: this.file.name
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        let fd = new FormData();
        fd.append('File', this.file);
        fd.append('tenKhoaHoc', this.state.tenKhoaHoc);
        if (this.isEdit) { 
            let objEdit = { ...this.state,taiKhoanNguoiTao:this.state.nguoiTao.taiKhoan}
            delete objEdit.nguoiTao;
            delete objEdit.danhMucKhoaHoc;
            this.props.editCourse(objEdit, fd);
        }
        else {
            let objAdd = { ...this.state,taiKhoanNguoiTao:this.state.taiKhoanNguoiTao}
            delete objAdd.nguoiTao;
            delete objAdd.danhMucKhoaHoc;
            this.props.addCourse(objAdd, fd);
        }
    }

    componentDidMount = () => {
        this.props.getCategories();
    }

    componentWillReceiveProps = (nextProp) => {
        this.setState(
            nextProp.courseDetail,
        );
    }

    renderCategories = () => {
        return this.props.Categories.map((item, index) => {
            return (<option key={index} value={item.maDanhMuc}>{item.tenDanhMuc}</option>);
        });
    }

    renderInput = () => {
        return (this.isEdit) ? (<input disabled={this.isEdit} placeholder="Admin account" type="text" name="taiKhoanNguoiTao" value={this.state.nguoiTao.taiKhoan} tabIndex={7} required onChange={this.handleOnchange} />) : ( <input placeholder="Admin account" type="text" name="taiKhoanNguoiTao" tabIndex={7} required onChange={this.handleOnchange} />);
    }

    render() {
        return (
            <div className="container">
                <form id="form" onSubmit={this.handleOnSubmit} >
                    <h3>{this.title}</h3>
                    <fieldset>
                        <label>ID course</label>
                        <input disabled={this.isEdit} placeholder="ID course" type="text" tabIndex={1} required autoFocus name="maKhoaHoc" value={this.state.maKhoaHoc} onChange={this.handleOnchange} />
                    </fieldset>
                    <fieldset>
                        <label>Short name</label>
                        <input placeholder="Short name" type="text" name="biDanh" value={this.state.biDanh} tabIndex={2} required autoFocus onChange={this.handleOnchange} />
                    </fieldset>
                    <fieldset>
                        <label>Name</label>
                        <input placeholder="Name" type="text" name="tenKhoaHoc" value={this.state.tenKhoaHoc} tabIndex={3} required autoFocus onChange={this.handleOnchange} />
                    </fieldset>
                    <fieldset>
                        <label>Views</label>
                        <input type="number" placeholder="Views" name="luotXem" value={this.state.luotXem} tabIndex={4} required autoFocus onChange={this.handleOnchange} />
                    </fieldset>
                    <fieldset>
                        <label>Vote</label>
                        <input type="number" placeholder="Vote" name="danhGia" value={this.state.danhGia} tabIndex={5} required autoFocus onChange={this.handleOnchange} />
                    </fieldset>
                    <fieldset>
                        <label>Description</label>
                        <input placeholder="Description" type="text" name="moTa" value={this.state.moTa} tabIndex={6} required onChange={this.handleOnchange} />
                    </fieldset>
                    <fieldset>
                        <label>Image:<span className="pl-2">{this.state.hinhAnh}</span></label>
                        <input type="file" name="hinhAnh" tabIndex={6} onChange={this.uploadHinhAnh} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="exampleFormControlSelect2">Group ID:<span className="pl-2">{this.state.maNhom}</span></label>
                        <select disabled={this.isEdit} multiple tabIndex={6} className="form-control" name="maNhom" id="exampleFormControlSelect2" onChange={this.handleOnchange}>
                            <option>GP01</option>
                            <option>GP02</option>
                            <option>GP03</option>
                            <option>GP04</option>
                            <option>GP05</option>
                            <option>GP06</option>
                            <option>GP07</option>
                            <option>GP08</option>
                            <option>GP09</option>
                            <option>GP10</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label>Date</label>
                        <input type="text" name="ngayTao" value={this.state.ngayTao} tabIndex={3} required autoFocus onChange={this.handleOnchange} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="maDanhMucKhoaHoc">Categories</label>
                        <select multiple tabIndex={6} className="form-control" name="maDanhMucKhoaHoc" id="maDanhMucKhoaHoc" onChange={this.handleOnchange}>
                            {this.renderCategories()}
                        </select>
                    </fieldset>
                    <fieldset>
                        <label>Admin account</label>
                        {this.renderInput()}
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit">Submit</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCourse: (course, fd) => {
            dispatch(addCourseAction(course, fd))
        },
        editCourse: (courseedit, fd) => {
            dispatch(editCourseAction(courseedit, fd))
        },
        getCategories: (categories) => {
            dispatch(getCategoriesAction(categories))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        Categories: state.CoursesReducerStore.Categories,
        courseDetail: state.CourseReducerStore
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCourse);