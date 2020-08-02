import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/logo2.png';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Button from "@material-ui/core/Button";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    img: {
        margin: '0 30px',
        height: '40px'
    },
    title: {
        marginLeft: '50px'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [dialog, setDialog] = useState(false);
    const handleMenuOpen = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    
    
    const history = useHistory();
    const handleExit = () => {
        localStorage.removeItem('user_info');
        history.push('/')
    };
    
    return (
        <div className={classes.grow}>
            <AppBar position='fixed'>
                <Toolbar>
                    <img className={classes.img} src={Logo} alt='logo' />
                    <div className={classes.grow} />
                    {/*搜索框*/}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="搜索标题或内容..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    {/*个人中心和退出*/}
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            onClick={handleMenuOpen}
                            color="inherit"
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                        >
                            <AccountCircle />
                        </IconButton>
                        <IconButton
                            onClick={() => {setDialog(true)}}
                            color="inherit"
                        >
                            <ExitToAppIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {/*弹出菜单*/}
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                // keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>个人中心</MenuItem>
                <MenuItem onClick={handleMenuClose}>修改资料</MenuItem>
                <MenuItem onClick={handleExit}>退出</MenuItem>
            </Menu>
            {/*弹出对话框*/}
            <Dialog
                open={dialog}
                fullWidth
                onClose={() => {setDialog(false)}}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">警告</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">确定要退出吗？</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleExit}>确认</Button>
                    <Button  color="primary" onClick={() => {setDialog(false)}} autoFocus>取消</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
