import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../components/footer'
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Grid,
    Box,
    Typography,
    Container,
    Snackbar,
    Slide
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import MuiLink from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { reqUserAdd } from '../../api/index';

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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
}

export default function Register() {
    const classes = useStyles();
    const history = useHistory();
    const [submitDisabled, setDisabled] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertVisible, setVisible] = useState(false);
    const [alertContent, setContent] = useState({type: 'success', info: 'success'});
    let timerID;
    const handleSubmit = (e) => {
        e.preventDefault();
        reqUserAdd({email, password}).then(res => {
            setContent({type: 'success', info: res.msg});
            setVisible(true);
            timerID = setTimeout(() => {
                setVisible(false);
                history.push('/login');
            }, 2000);
        }, err => {
            setContent({type: 'error', info: err.errMsg});
            setVisible(true);
            timerID = setTimeout(() => {
                setVisible(false);
            }, 2000)
        });
    };
    useEffect(() => {
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
                    用户注册
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                size="small"
                                required
                                fullWidth
                                id="email"
                                label="邮箱地址"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                size="small"
                                required
                                fullWidth
                                name="password"
                                label="密码"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e)=>{setPassword(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="allowExtraEmails"
                                        color="primary"
                                        onChange={()=>{setDisabled(!submitDisabled)}}
                                    />}
                                label="我接受MyDiary的隐私条款"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={submitDisabled}
                    >
                        注册
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to='/login'>
                                <MuiLink component='button'>
                                    已有账号？立即登录
                                </MuiLink>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Footer />
            </Box>
        </Container>
    );
}
