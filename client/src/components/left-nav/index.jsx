import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Divider from '@material-ui/core/Divider';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '15vw',
        height: '100vh',
        // marginTop: '60px',
        position: 'fixed',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function LeftNav() {
    const classes = useStyles();
    const history = useHistory();
    const linkTo = (url) => {
        history.push(url)
    };
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={() => linkTo('/user/center')}>
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="个人中心" />
                </ListItem>
                <ListItem button onClick={() => linkTo('/user/diarys')}>
                    <ListItemIcon>
                        <ListAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="日记本" />
                </ListItem>
                <ListItem button onClick={() => linkTo('/user/favorites')}>
                    <ListItemIcon>
                        <StarBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="收藏夹" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button onClick={() => linkTo('/user/myday')}>
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="写日记" />
                </ListItem>
            </List>
        </div>
    );
}
