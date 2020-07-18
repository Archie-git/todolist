import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '20%', height: '100vh', float: 'left',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function LeftNav() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <WbSunnyIcon />
                    </ListItemIcon>
                    <ListItemText primary="写日记" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <StarBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="日记列表" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ListAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="收藏夹" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="草稿箱" />
                </ListItem>
            </List>
        </div>
    );
}
