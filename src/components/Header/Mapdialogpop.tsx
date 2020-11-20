import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './Mapdialogpop.css';
import { Room } from '@material-ui/icons';



const Dialogpop = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className="hypprmap">
      <Room fontSize="small"/>
      Your Location
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose your location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            select delivery location to see product availbility and delivery options
          </DialogContentText>
          <Button variant="contained" size="large" color="primary">
          sign in to see your address
        </Button>
        <DialogContentText>
        <TextField
            autoFocus
            margin="dense"
            id="zip"
            name="zip"
            label="Enter Your Pincode"
            type="text"
            fullWidth
          />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        
      <Button  variant="contained" onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
  Apply
</Button>
</DialogActions>
      </Dialog>
    </div>
  );
}

export default Dialogpop;