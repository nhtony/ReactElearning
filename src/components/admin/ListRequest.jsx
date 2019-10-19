import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));


function ListRequest(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);
    const goToPage = (tk, mkh) => {
        props.history.push(`/admin/notification/${tk}/${mkh}`);
    }

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };

    return (
        props.listRequest.length > 0 ?
            <List className={classes.root}>
                {props.listRequest.map((value, index) => {
                    const labelId = `checkbox-list-label-${value}`;
                    return (
                        <ListItem key={index} role={undefined} dense button onClick={() => { handleToggle(value); goToPage(value.taiKhoan, value.maKhoaHoc) }}>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${value + 1}`}
                                    src={value.avatar}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={`${value.hoTen}  đang chờ xét duyệt khóa học ${value.tenKhoaHoc}`} />
                            <Avatar
                                alt={`Avatar n°${value + 1}`}
                                src={value.hinhAnh}
                            />
                        </ListItem>
                    );
                })}
            </List > : <p>Chưa có yêu cầu nào</p>
    );
}


export default withRouter(ListRequest)