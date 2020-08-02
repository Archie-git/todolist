import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import Header from '../../components/header';
import MyDay from '../../components/myday';
import LeftNav from '../../components/left-nav';
import Favorites from '../../components/favorites';
import Diarys from '../../components/diarys';
import Center from '../../components/center';
import memoryUtil from "../../util/memoryUtil";

export default function Home(){
    const history = useHistory();
    if(!localStorage.getItem('user_info')){
        history.push('/login')
    }else{
        memoryUtil.user_info = JSON.parse(localStorage.getItem('user_info'))
    }
    return (
        <div>
            {/*头部工具栏*/}
            <Header />
            
            {/*左侧导航栏*/}
            <LeftNav />
            
            {/*右侧主体区域*/}
            <div style={{width: '85vw-window.innerWidth', minHeight: '100vh', background: 'lightblue', marginLeft: '15vw', marginTop: '60px'}}>
                <Switch>
                    <Route path='/user/center' component={Center} />
                    <Route path='/user/myday' component={MyDay} />
                    <Route path='/user/diarys' component={Diarys} />
                    <Route path='/user/favorites' component={Favorites} />
                    <Redirect from='*' to='/user/myday' />
                </Switch>
            </div>
        </div>
    )
}