import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Logo from '../../assets/logo1.png';

export default function Welcome(){
    let history = useHistory();
    if(localStorage.getItem('user_info')){
        history.replace('/user')
    }
    return (
        <div>
            <div style={{padding: '10px 100px'}}>
                <img src={Logo} style={{width: '120px', height: '40px'}} alt='logo' />
                <span style={{float: 'right'}}>
                        <Link to='/login' style={{textDecoration: 'none'}}>
                            <Button size='large' color='primary'>登录</Button>
                        </Link>
                        <Link to='/register' style={{textDecoration: 'none'}}>
                            <Button size='large' color='primary'>注册</Button>
                        </Link>
                    </span>
            </div>
            <div style={{height: '100vh', padding: '20vh 0', boxSizing: 'border-box', textAlign: 'center'}}>
                <h1 style={{marginBottom: '30px', fontSize: '50px'}}>使用MyDiary记录你的生活</h1>
                <Link to='/login' style={{textDecoration: 'none'}}>
                    <Button variant='contained' size='large' color='primary'>立即体验</Button>
                </Link>
            </div>
        </div>
    )
}