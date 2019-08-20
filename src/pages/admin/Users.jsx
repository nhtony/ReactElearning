import React, { Component } from 'react'
import TableUser from '../../components/admin/TableUser';
import { connect } from 'react-redux';
import { getListUserAction } from '../../redux/actions/Users.action';
class Users extends Component {

    componentDidMount() {
        this.props.getListUser();
    }

    render() {
        return (<TableUser></TableUser>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListUser: () => {
            dispatch(getListUserAction())
        }
    }
}
export default connect(null, mapDispatchToProps)(Users);

