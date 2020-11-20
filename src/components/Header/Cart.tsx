import React, {useState} from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import freedomrefinedoilsunflower from '../../images/freedom-refined-oil-sunflower.jpg'
import fortunerefinedsunfloweroil from '../../images/fortune-refined-sunflower-oil.jpg'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './Cart.css'
import { AutoComplete } from 'material-ui';
import { StrikethroughS } from '@material-ui/icons';
import { Container } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
        margin: theme.spacing(1),
        },
      extendedIcon: {
        marginRight: theme.spacing(1),

      },
  }),
);

  
const Cart = () => {
    const initialnumber=0
    const classes = useStyles();
    const [num, setNum] = useState(0);
    const incNum = () => {
        setNum(num+1)
    }
    const decNum = () => {
        if(num > 0){
            setNum(num-1);
        }else{
            alert("sorry, zero limit Reched");
            setNum(0)
        }
    }
    const [state, setState] = React.useState(false)
    const toggleDrawer = (open) => (event) => {
        setState(open)
    }
    const list = () => (
        
        
            <List>
                 <ListItem button>
                    Order Summary
                    <span className="delete-btn"></span>
                    </ListItem>
                 <Divider/>
                 <ListItem>
                    <img src={freedomrefinedoilsunflower} alt="freedomrefinedoilsunflower" className="hypprcartimg"/>
                 Freedom Winner Refined Sunflower oil
                 <span className="delete-btn"></span>
                 </ListItem>
                 <ListItem>
                 <p className="hypprmargin">Rs . 111  <del>Rs. 125</del></p>
                 <p className="hypprmargin">You save 14 Rs.</p>
                 <Button variant="outlined" onClick={incNum} className="hypprtbutton"><AddIcon/></Button>
                 <h3> {num} </h3>
                 <Button variant="outlined" onClick={decNum}><RemoveIcon/></Button>
                 
                 </ListItem>
                 <Divider/>
                 <ListItem>
                     <img src={fortunerefinedsunfloweroil} alt="fortunerefinedsunfloweroil" className="hypprcartimg"/>
                 Fortune Refined Sunflower oil
                 <span className="delete-btn"></span>
                 </ListItem>
                 <ListItem>
                 <p className="hypprmargin">Rs . 111  <del>Rs. 125</del></p>
                 <p className="hypprmargin">You save 14 Rs.</p>
                 <Button variant="outlined" onClick={incNum} className="hypprtbutton"><AddIcon/></Button>
                 <h3> {num} </h3>
                 <Button variant="outlined" onClick={decNum}><RemoveIcon/></Button>
                 
                 </ListItem>
                 
                 <Divider/>
                 <div className="hypprtbutton">
                 
                 <Button variant="contained" size="large" color="primary" className={classes.margin}>
          Place Order
        </Button>
        </div>
            </List>
        
    )
    return (
        <div>
            <Button onClick={toggleDrawer(true)} className="hypprcart">
            <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon fontSize="small"/>
            </Badge>
           {/* //<span className="badge">3</span> */}
           Cart
           </Button>
           <Drawer 
           anchor={'right'}
           open={state}
           onClose={toggleDrawer(false)}
           >
               {list()}
            </Drawer>
        </div>
    );
}
export default Cart