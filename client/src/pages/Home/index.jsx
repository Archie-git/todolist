import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import MyDay from '../../components/MyDay';
import ImportantTasks from '../../components/ImportantTasks';
import LeftNav from '../../components/LeftNav';

class Home extends React.Component{
    render(){
        return (
            <div style={{height: '100vh', overflow: 'hidden'}}>
                {/*头部工具栏*/}
                <Header />
    
                {/*左侧导航栏*/}
                <LeftNav />
    
                {/*右侧主体区域*/}
                <div style={{width: '80%', height: '100vh', float: 'right', background: 'lightblue'}}>
                    <Switch>
                        <Route path='/home/myday' component={MyDay} />
                        <Route path='/home/important' component={ImportantTasks} />
                        {/*<Route path='/home/two' component={TasksNow} />*/}
                        {/*<Route path='/home/two' component={AllTask} />*/}
                        <Redirect from='*' to='/home/myday' />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Home