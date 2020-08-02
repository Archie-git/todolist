import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../components/footer';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { reqLogin } from '../../api/index';
import Alert from "@material-ui/lab/Alert";
import {Slide, Snackbar} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
}

export default function Login(){
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertVisible, setVisible] = useState(false);
    const [alertContent, setContent] = useState({type: 'success', info: 'success'});
    let timerID;
    const handleForget = () => {
        console.log('handleForget work')
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {email, password};
        reqLogin(data).then(ret => {
            localStorage.setItem('user_info', JSON.stringify(ret.data));
            setContent({type: 'success', info: ret.msg});
            setVisible(true);
            timerID = setTimeout(() => {
                setVisible(false);
                history.push('/user/myday')
            }, 2000)
        }, err => {
            setContent({type: 'error', info: err.errMsg});
            setVisible(true);
            timerID = setTimeout(() => {
                setVisible(false)
            }, 2000)
        })
    };
    useEffect( () => {
        return () => {
            clearTimeout(timerID)
        }
    });
    return (
        <Container component="main" maxWidth="xs">
            <Snackbar
                open={alertVisible}
                anchorOrigin={{horizontal: 'center', vertical: 'top'}}
                TransitionComponent={TransitionDown}
                autoHideDuration={6000}
            >
                <Alert severity={alertContent.type} variant='filled'>{alertContent.info}</Alert>
            </Snackbar>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar} />
                <Typography component="h1" variant="h5">
                    登录
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="电子邮箱"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <TextField
                        variant="outlined"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="密码"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        vlaue={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        登录
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <MuiLink onClick={handleForget} variant="body2">
                                忘记密码？
                            </MuiLink>
                        </Grid>
                        <Grid item>
                            <Link to='/register'>
                                <MuiLink component='button' variant="body2">
                                    还没有账号？前往注册
                                </MuiLink>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Footer />
            </Box>
        </Container>
    )
}
