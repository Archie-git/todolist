import React, { useState } from 'react';
import { reqDiaryAdd } from "../../api";
import {Card, CardContent, Button} from "@material-ui/core";
import memoryUtil from "../../util/memoryUtil";

export default function MyDay(){
    const [diary, setDiary] = useState('');
    const getChange = (e) => {
        setDiary(e.target.value)
    };
    const handleSubmit = () => {
        const data = {
            userid: memoryUtil.user_info.id,
            text: diary,
            createtime: new Date().getTime()
        };
        reqDiaryAdd(data).then(res => {
            console.log('success');
            console.log(res)
        }, err => {
            console.log('error');
            console.log(err)
        })
    };
    return (
        <div>
            <h1>写日记</h1>
            <Card style={{margin: '15px'}}>
                <CardContent>
                        <textarea
                            style={{width: '100%', margin: '10px', boxSizing: 'content-box', height: '400px'}}
                            onChange={(e) => getChange(e)}
                        />
                </CardContent>
            </Card>
            <Button variant='contained' color='primary' style={{float: 'right'}} onClick={handleSubmit}>保存</Button>
        </div>
    )
}