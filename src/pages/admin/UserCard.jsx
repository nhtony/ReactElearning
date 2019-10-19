import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { studentAction, setNoifyAction } from '../../redux/actions/Students.action';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import { listTypes } from '../../common/Config';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

function UserCard(props) {
    console.log("TCL: UserCard -> props", props)

    const classes = useStyles();

    const getCurrentTime = () => {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes();
        return date + ' ' + time;
    }
    const noti = {
        ...props.course, content: 'đã được ghi danh',
        time: getCurrentTime()
    }

    const handleClick = (mkh, taikhoan, type) => {
        props.handleCourse(mkh, taikhoan, type);
        props.setNotify(noti, taikhoan);

        setTimeout(() => {
            props.history.replace('/admin/notification');
            window.location.reload();
        }, 1000);

    }

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={props.course.avatar}>
                        R
          </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.course.hoTen}
                subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image={props.course.hinhAnh}
                title="Paella dish"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.course.tenKhoaHoc}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Button onClick={() => handleClick(props.course.maKhoaHoc, props.course.taiKhoan, listTypes.course.isenroll)} color="primary">Ghi danh</Button>
            </CardActions>
        </Card>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleCourse: (idcourse, username, listType) => {
            dispatch(studentAction(idcourse, username, listType));
        },
        setNotify: (noti, taiKhoan) => {
            dispatch(setNoifyAction(noti, taiKhoan));
        }
    }
}

export default connect(null, mapDispatchToProps)(UserCard);