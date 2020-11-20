import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import './User.css'
import Userdialogpop from './Userdialogpop';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }),
);

export default function UserDropdown() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Userdialogpop/>
       </div>
  );
}
