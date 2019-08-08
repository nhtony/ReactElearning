import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { API_DELETE_COURSE } from '../../common/Config';
import { getLocalStorage, token } from '../../common/Config';
import { connect } from 'react-redux';
import swal from 'sweetalert2';
import { findCourseAction } from '../../redux/actions/ListCourse.action';
const headRows = [
    { id: 'maKhoaHoc', numeric: false, disablePadding: true, label: 'ID' },
    { id: 'biDanh', numeric: false, disablePadding: true, label: 'Short name' },
    { id: 'tenKhoaHoc', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'moTa', numeric: false, disablePadding: true, label: 'Desc' },
    { id: 'luotXem', numeric: false, disablePadding: true, label: 'views' },
    { id: 'hinhAnh', numeric: false, disablePadding: true, label: 'Img' },
    { id: 'ngayTao', numeric: false, disablePadding: true, label: 'Date' },
    { id: 'soLuongHocVien', numeric: true, disablePadding: false, label: 'Users' }
];

let listDelete = [];

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };
    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                {headRows.map(row => (
                    <TableCell
                        key={row.id}
                        align={row.numeric ? 'right' : 'left'}
                        padding={row.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === row.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === row.id}
                            direction={order}
                            onClick={createSortHandler(row.id)}
                        >
                            {row.label}
                            {orderBy === row.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    title: {
        flex: '0 0 auto',
    },
}));


const EnhancedTableToolbar = props => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
    function xoa() {
        listDelete.forEach(username => {
            Axios({
                method: 'DELETE',
                url: API_DELETE_COURSE + username,
                headers:
                {
                    "Authorization": "Bearer " + getLocalStorage(token)
                }
            }).then((res) => {
                successAlert(res.data);
                window.location.reload();
            }).catch((err) => {
                swal.fire("Message", err.response.data, 'error');
                window.location.reload();
            })
        });
    }
    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            <div className={classes.title}>
                {numSelected > 0 ? (
                    <Typography color="inherit" variant="subtitle1">
                        {numSelected} selected
          </Typography>
                ) : (
                        <Typography variant="h6" id="tableTitle">
                            Data Table
          </Typography>
                    )}
            </div>
            <div className={classes.spacer} />
            <div className={classes.actions}>
                {numSelected > 0 ? (
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete" onClick={() => xoa()}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                        <Tooltip title="Filter list">
                            <IconButton aria-label="filter list">
                                <FilterListIcon />
                            </IconButton>
                        </Tooltip>
                    )}
            </div>
        </Toolbar>
    );
};


EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));



function EnhancedTable(props) {
    var rows = props.Courses;
    const pageInfo = props.pageInfo;
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    function handleRequestSort(event, property) {
        const isDesc = orderBy === property && order === 'desc';
        setOrder(isDesc ? 'asc' : 'desc');
        setOrderBy(property);
    }

    function handleSelectAllClick(event) {
        if (event.target.checked) {
            const newSelecteds = rows.map(n => n.maKhoaHoc);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    }

    function handleClick(event, maKhoaHoc) {
        const selectedIndex = selected.indexOf(maKhoaHoc);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, maKhoaHoc);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
        listDelete = newSelected;
    }

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    function handleChangeDense(event) {
        setDense(event.target.checked);
    }

    function handleOnchange(event) {
        let keyWord = event.target.value;
        if (keyWord) {
            props.findCourse(keyWord);
        }
        else {
            props.findCourse();
        }
    }

    const renderTableContent = () => {
        if (!props.isNotFound)
            return (
                <div className={classes.tableWrapper}>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.maKhoaHoc);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.maKhoaHoc}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox onClick={event => handleClick(event, row.maKhoaHoc)}
                                                    checked={isItemSelected}
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.maKhoaHoc}
                                            </TableCell>
                                            <TableCell padding="none" >{row.biDanh}</TableCell>
                                            <TableCell padding="none">{row.tenKhoaHoc}</TableCell>
                                            <TableCell padding="none" >{row.moTa}</TableCell>
                                            <TableCell padding="none" >{row.luotXem}</TableCell>
                                            <TableCell padding="none">{row.hinhAnh}</TableCell>
                                            <TableCell padding="none" >{row.ngayTao}</TableCell>
                                            <TableCell align="right">{row.soLuongHocVien}</TableCell>
                                            <TableCell padding="none" ><Link to={"/admin/edit-course/" + row.maKhoaHoc} className="btn btn-primary">Edit</Link></TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 49 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            );
        else {
            return (
                <div className="text-center">
                    {props.message}
                </div>
            )
        }
    }


    const isSelected = maKhoaHoc => selected.indexOf(maKhoaHoc) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);


    return (
        <div className={classes.root}>
            <h1 className="text-center">{pageInfo.title}</h1>
            <div className="action-group mb-4 row">
                <div className="col-5 input-group">
                    <input type="text" className="form-control" name="hoTen" placeholder="Name" onChange={handleOnchange} />
                    <div className="input-group-append">
                        <span className="btn btn-secondary">Search</span>
                    </div>
                </div>
                <div className="col-7 text-right">
                    <Link to="/admin/add-course" className="btnThem btn btn-success text-white border-success" type="button">{pageInfo.btnName}</Link>
                </div>
            </div>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar numSelected={selected.length} />
                {renderTableContent()}
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'previous page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'next page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
        </div>
    );
}

const successAlert = (content) => {
    swal.fire({
        position: 'center',
        type: 'success',
        title: content,
        showConfirmButton: false,
        timer: 1000
    })
}

const mapStateToProps = (state) => {
    return {
        Courses: state.CoursesReducerStore.Courses,
        message: state.CoursesReducerStore.message,
        isNotFound: state.CoursesReducerStore.isNotFound,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        findCourse: (name) => {
            dispatch(findCourseAction(name))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EnhancedTable);



