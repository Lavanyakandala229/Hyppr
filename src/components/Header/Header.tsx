import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './header.css';
import hypprLogo from '../../images/hypprLogo.svg'
import Searchbox from './Searchbox';
import Dialogpop from './Mapdialogpop';
import UserDropdown from './UserDropdown';
import Wishlist from './Wishlist';
import Cart from './Cart';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
  }),
);

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const handleDrawer = () =>{
        setOpen(true);
    }

 
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" onClick={handleDrawer} className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
          <img src={hypprLogo} alt="hyppr logo" className="one-fourthimg
          "/>
          </Typography>
          <div>
              <Dialogpop/>
            </div>

          <div>
              <Searchbox/>
            </div>
          
          <div>
              <UserDropdown/>
            </div>
            <div>
              <Wishlist/>
            </div>
          <div>
              <Cart/>
            </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        >
            <div style={{height: "100%", width: "250px"}}>
            <h3>This is Navbar</h3>
            </div>
      </Drawer>
    </div>
  );
}
export default Header;