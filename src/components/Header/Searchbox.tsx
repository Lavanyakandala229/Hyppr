import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
//import DirectionsIcon from '@material-ui/icons/Directions';
import './Search.css'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 0px',
    display: 'flex',
    alignItems: 'center',
    width: 620,
  },
  input: {
    fontSize:12,
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    fontSize:12,
    padding: 1,
  },
  divider: {
    height:15,
    margin:5,
    paddingRight:1,
    paddingTop:1,
    paddingBottom:1,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input} 
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
  );
}
