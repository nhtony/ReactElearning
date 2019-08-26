import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux';
import { adminLoginAction } from '../../redux/actions/User.action';
import { Redirect } from 'react-router-dom';

class LoginAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
        }

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state);
    }

    handleOnchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    renderForm = () => {
        const styles = {
            contain: {
                padding: "200px 0"
            }
        }
        return (<div className="container text-center">
            <form onSubmit={this.handleSubmit} style={styles.contain}>
                <div className="input-username mb-3">
                    <FormControl >
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input id="username" name="taiKhoan" onChange={this.handleOnchange} />
                    </FormControl>
                </div>
                <div className="input-password mb-3">
                    <FormControl>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" name="matKhau" type={"password"} onChange={this.handleOnchange} />
                    </FormControl>
                </div>
                <div className="mt-5">
                    <Button type="submit" variant="contained" color="primary">
                        Login
                </Button>
                </div>
            </form>
        </div>);
    }


    render() {
        return (this.props.isAdLogin) ? <Redirect to='/admin'></Redirect> : this.renderForm();

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => {
            dispatch(adminLoginAction(user));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isAdLogin: state.UserReducer.isAdLogin,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginAdmin);