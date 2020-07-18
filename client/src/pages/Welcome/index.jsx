import React from 'react';
import { Button } from '@material-ui/core';
import Logo from '../../assets/logo1.png';
import axios from 'axios';
// import { reqUser } from '../../api/index';

class Welcome extends React.Component{
    componentWillMount = async () => {
        axios.get('/test').then(ret => {
            console.log('success');
            console.log(ret)
        }, err => {
            console.log('err');
            console.log(err)
        })
    };
    render(){
        return (
            <div>
                <div style={{padding: '10px 100px'}}>
                    <img src={Logo} style={{width: '120px', height: '40px'}} alt='logo' />
                    <span style={{float: 'right'}}>
                    <Button size='large' color='primary'>登录</Button>
                    <Button size='large' color='primary'>注册</Button>
                </span>
                </div>
                <div style={{height: '100vh', padding: '20vh 0', boxSizing: 'border-box', textAlign: 'center'}}>
                    <h1 style={{marginBottom: '30px', fontSize: '50px'}}>使用MyDiary记录你的生活</h1>
                    <Button variant='contained' size='large' color='primary'>立即体验</Button>
                </div>
            </div>
        )
    }
}

export default Welcome