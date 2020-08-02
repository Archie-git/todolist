import React, { useState, useEffect} from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';
import memoryUtil from "../../util/memoryUtil";
import { reqUserInfo } from "../../api/index";

export default function Center(){
    const [user, setUser] = useState({});
    useEffect(() => {
        reqUserInfo({id: memoryUtil.user_info.id}).then(ret => {
            console.log('success');
            console.log(ret);
            setUser(ret.data)
        }, err => {
            console.log(err)
        })
    }, []);
    return (
        <div>
            <h1>Center页面</h1>
            <div style={{padding: '15px'}}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <div>已写日记</div>
                                <div>11篇</div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <div>共计录字符</div>
                                <div>1000字</div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent>天气</CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}