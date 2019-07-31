import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUserAction } from '../../redux/actions/ListUser.action';
class Form extends Component {

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
        console.log(this.state);
        
        this.props.addUser(this.state);
    }


    render() {
        return (
            <div className="container">
                <form id="contact" onSubmit={this.handleOnSubmit}>
                    <h3>Add Form</h3>
                    <fieldset>
                        <input placeholder="Your username" type="text" tabIndex={1} required autoFocus name="taiKhoan" onChange={this.handleOnchange} />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your password" type="text" name="matKhau" tabIndex={2} required autoFocus onChange={this.handleOnchange} />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your name" type="text" name="hoTen" tabIndex={3} required autoFocus onChange={this.handleOnchange} />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Phone Number" type="tel" name="soDT" tabIndex={4} required onChange={this.handleOnchange} />
                    </fieldset>
                    <fieldset>
                        <select tabIndex="{5}" className="form-control" id="userTypes" name="maLoaiNguoiDung" onChange={this.handleOnchange}>
                            <option>User types</option>
                            <option>GV</option>
                            <option>HV</option>
                        </select>

                    </fieldset>
                    <fieldset>
                        <label htmlFor="exampleFormControlSelect2">Group ID</label>
                        <select multiple tabIndex={6} className="form-control" name="maNhom" id="exampleFormControlSelect2" onChange={this.handleOnchange}>
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
                        <input placeholder="Your Email Address" type="email" name="email" tabIndex={7} required onChange={this.handleOnchange} />
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
        }
    }
}

export default connect(null, mapDispatchToProps)(Form);