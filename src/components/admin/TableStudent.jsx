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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getListAction } from '../../redux/actions/Students.action';
import { studentAction } from '../../redux/actions/Students.action';
import { listTypes } from '../../common/Config';

let headRows = [
    { id: 'taiKhoan', numeric: false, disablePadding: false, label: 'Username' },
    { id: 'hoTen', numeric: false, disablePadding: false, label: 'Name' },
    { id: 'biDanh', numeric: false, disablePadding: false, label: 'Short name' },
];

let isStudents = true;

let optionValue = listTypes.student.isstudent;

let listDisenroll = [];

let openDeleteBtn = false;

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

    let headerRows = (isStudents) ? headRows : [...headRows, { id: 'setting', numeric: false, disablePadding: false, label: 'Setting' }]

    const renderCheckboxHead = () => {
        return (isStudents) ? (
            <TableCell padding="checkbox">
                <Checkbox
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={numSelected === rowCount}
                    onChange={onSelectAllClick}
                    inputProps={{ 'aria-label': 'select all desserts' }}
                />
            </TableCell>
        ) : null;
    }

    return (
        <TableHead>
            <TableRow>
                {renderCheckboxHead()}
                {headerRows.map(row => (
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
    let numSelected = (openDeleteBtn) ? 0 : props.numSelected;
    let tableName = "";
    switch (optionValue) {
        case listTypes.student.isstudent:
            tableName = "Bảng: Học viên";
            break;
        case listTypes.student.notstudent:
            tableName = "Bảng: Người dùng chưa ghi danh";
            break;
        case listTypes.student.waitinguser:
            tableName = "Bảng: Người dùng chờ ghi danh";
            break;
        default:
            break;
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
                            {tableName}
                        </Typography>
                    )}
            </div>
            <div className={classes.spacer} />
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
    var rows = props.Students;
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
            const newSelecteds = rows.map(n => n.taiKhoan);
            setSelected(newSelecteds);
            listDisenroll = newSelecteds;
            return;
        }
        listDisenroll = [];
        setSelected([]);
    }

    function handleClick(event, taiKhoan) {
        let selectedIndex = selected.indexOf(taiKhoan);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = (openDeleteBtn) ? [] : newSelected.concat(selected, taiKhoan);
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
        listDisenroll = newSelected;
        openDeleteBtn = false;
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

    const handleOnchange = (event) => {
        optionValue = event.target.value;
        isStudents = (event.target.value === listTypes.student.isstudent) ? true : false;
        props.getStudents(props.courseDetail.maKhoaHoc, event.target.value);
    }

    const endisrollCourse = (username) => {
        if (optionValue === listTypes.student.isstudent) {
            listDisenroll.forEach(username => {
                props.handleCourse(props.courseDetail.maKhoaHoc, username, optionValue); // Hủy ghi danh
            })
            openDeleteBtn = true;
        }
        else {
            props.handleCourse(props.courseDetail.maKhoaHoc, username, optionValue); // Ghi danh
        }
    }

    const renderCheckBox = (isItemSelected, labelId, row) => {
        return (isStudents) ? (
            <TableCell padding="checkbox">
                <Checkbox onClick={event => handleClick(event, row.taiKhoan)}
                    checked={isItemSelected}
                    inputProps={{ 'aria-labelledby': labelId }} />
            </TableCell>
        ) : null;
    }

    const isSelected = taiKhoan => selected.indexOf(taiKhoan) !== -1;

    const renderTable = () => {
        return (<Table
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
                        const isItemSelected = isSelected(row.taiKhoan);
                        const labelId = `enhanced-table-checkbox-${index}`;
                        return (
                            <TableRow
                                hover
                                role="checkbox"
                                aria-checked={isItemSelected}
                                tabIndex={-1}
                                key={row.taiKhoan}
                            >
                                {renderCheckBox(isItemSelected, labelId, row)}
                                <TableCell component="th" id={labelId} scope="row" >
                                    {row.taiKhoan}
                                </TableCell>
                                <TableCell  >{row.hoTen}</TableCell>
                                <TableCell  >{row.biDanh}</TableCell>
                                {renderCell(row.taiKhoan)}
                            </TableRow>
                        );
                    })}
                {emptyRows > 0 && (
                    <TableRow style={{ height: 49 * emptyRows }}>
                        <TableCell colSpan={6} />
                    </TableRow>
                )}
            </TableBody>
        </Table>)
    }

    const renderTableContent = () => {
        return (rows.length > 0) ? renderTable() : (
            <div className="text-center">
                <p>Chưa có học viên nào...</p>
            </div>)
    }

    const renderCell = (username) => {
        return (isStudents) ? null : (
            <TableCell padding="none" align="left" >
                <button onClick={() => endisrollCourse(username)} className="btn btn-outline-success mr-3">Ghi danh</button>
            </TableCell>);
    }

    const renderButton = () => {
        return (isStudents) ? (<button className="btnThem btn btn-danger text-white mr-4 border-danger" onClick={() => endisrollCourse()} type="button">Hủy ghi danh</button>) : null;
    }

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className="{classes.root}">
            <div className="card" style={{ width: '18rem', margin: '0 auto' }}>
                <img style={{ width: '18rem', height: '10rem' }} className="card-img-top" src={props.courseDetail.hinhAnh} alt="khoahoc" />
                <div className="card-body">
                    <h5 className="card-title">{props.courseDetail.tenKhoaHoc}</h5>
                </div>
            </div>
            <div className="action-group mb-4 row">
                <div className="col-2">
                    <select onChange={handleOnchange} className="form-control" name="typeselect">
                        <option value={listTypes.student.isstudent}>Học viên</option>
                        <option value={listTypes.student.notstudent}>Chưa ghi danh</option>
                        <option value={listTypes.student.waitinguser}>Chờ ghi danh</option>
                    </select>
                </div>
                <div className="col-10  text-right">
                    {renderButton()}
                    <Link to="/admin/courses" className="btnThem btn btn-secondary text-white border-secondary" type="button">Thoát</Link>
                </div>
            </div>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <div className={classes.tableWrapper}>
                    {renderTableContent()}
                </div>
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
        </div >
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStudents: (idcourse, listType) => {
            dispatch(getListAction(idcourse, listType));
        },
        handleCourse: (idcourse, username, listType) => {
            dispatch(studentAction(idcourse, username, listType));
        },
    }
}

export default connect(null, mapDispatchToProps)(EnhancedTable);

