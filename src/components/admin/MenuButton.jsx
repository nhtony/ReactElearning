import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';


const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default  function MenuButton(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const goToPage = (url) => {
        props.history.push(`${url}${props.maKH}`)
    }
   


    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Mở
      </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                <StyledMenuItem onClick={() => goToPage("/admin/edit-course/")}>
                    <ListItemIcon>

                        <Icon>build</Icon>

                    </ListItemIcon>
                    <ListItemText primary="Cập nhật" />
                </StyledMenuItem>

                <StyledMenuItem onClick={() => goToPage("/admin/students/")}>
                    <ListItemIcon>
                        <Badge badgeContent={4} color="secondary">
                            <Icon>account_circle</Icon>
                        </Badge>
                    </ListItemIcon>
                    <ListItemText primary="Học viên" />
                </StyledMenuItem>

                <StyledMenuItem onClick={() => goToPage("/admin/notification/")}>
                    <ListItemIcon>
                        <Badge badgeContent={4} color="secondary">
                            <Icon>mode_comment</Icon>
                        </Badge>
                    </ListItemIcon>
                    <ListItemText primary="Câu hỏi" />
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}


