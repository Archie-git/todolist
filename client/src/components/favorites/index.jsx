import React, { useState, useEffect } from 'react';
import {reqFavoritesList} from "../../api";
import memoryUtil from "../../util/memoryUtil";
import { List, ListItem, Card, CardContent } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import store from '../../store/index';

export default function Favorites(){
    const [diarys, setDiarys] = useState([]);
    const [count, setCount] = useState(0);
    const [current, setCurrent] = useState(1);
    const handlePagenationChange = (e, number) => {
        setCurrent(number);
    };
    useEffect(() => {
        reqFavoritesList({id: memoryUtil.user_info.id}).then(res => {
            setDiarys(res.data);
            setCount(Math.ceil(res.data.length/10));
            const action = {
                type: 'favoritesChange',
                value: res.data
            };
            store.dispatch(action);
            console.log(store.getState())
        }, err => {
            console.log(err)
        });
    }, []);
    return (
        <div>
            <h1>Favorites页面</h1>
            <List>
                {
                    diarys.map((item, index) => {
                        return index >= (current - 1)*10 && index < current*10 ? (
                            <ListItem key={index}>
                                {/*<div>{item.title}</div>*/}
                                {/*<span>{item.text}</span>*/}
                                <Card style={{width: '100%'}}>
                                    <CardContent>
                                        <div>{index}</div>
                                        <div>{item.title}</div>
                                        <div>{item.text}</div>
                                    </CardContent>
                                </Card>
                            </ListItem>
                        ) : null
                    })
                }
            </List>
            <Pagination
                style={{display: count ? 'block' : 'none'}}
                count={count}
                color='primary'
                onChange={handlePagenationChange}
            />
        </div>
    )
}