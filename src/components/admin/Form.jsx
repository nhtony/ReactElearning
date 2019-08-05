import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUserAction,editUserAction } from '../../redux/actions/ListUser.action';

class Form extends Component {
     
   
    isEdit = this.props.form.status;
    title = this.props.form.formTitle;

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            maLoaiNguoiDung: '',
            maNhom: '',
            email: ''
        }
    }

    handleOnchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        if(this.isEdit){
            this.props.editUser(this.state);
        }
        else{
            this.props.addUser(this.state);
        }
    }

    componentWillReceiveProps = (nextProp) => {
        this.setState(nextProp.userProfile);
    }

    render() {
        return (
            <div className="container">
                <form id="contact" onSubmit={this.handleOnSubmit}>
                    <h3>{this.title}</h3>
                    <fieldset>
                        <input disabled={this.isEdit} placeholder="Your username" type="text" tabIndex={1} required autoFocus name="taiKhoan" value={this.state.taiKhoan} onChange={this.handleOnchange} />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your password" type="password" name="matKhau" value={this.state.matKhau} tabIndex={2} required autoFocus onChange={this.handleOnchange} />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your name" type="text" name="hoTen" value={this.state.hoTen} tabIndex={3} required autoFocus onChange={this.handleOnchange} />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Phone Number" type="tel" name="soDT" value={this.state.soDT} tabIndex={4} required onChange={this.handleOnchange} />
                    </fieldset>
                    <fieldset>
                        <select tabIndex="{5}" className="form-control" id="userTypes" name="maLoaiNguoiDung" value={this.state.maLoaiNguoiDung} onChange={this.handleOnchange}>
                            <option>User types</option>
                            <option>GV</option>
                            <option>HV</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="exampleFormControlSelect2">Group ID</label>
                        <select disabled = {this.isEdit} multiple tabIndex={6} className="form-control" name="maNhom" id="exampleFormControlSelect2" onChange={this.handleOnchange}>
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
                        <input placeholder="Your Email Address" type="email" name="email" value={this.state.email} tabIndex={7} required onChange={this.handleOnchange} />
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
        addUser: (user) => {
            dispatch(addUserAction(user))
        },
        editUser: (useredit) => {
            dispatch(editUserAction(useredit))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.UserReducerStore.userProfile
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);