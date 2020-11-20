import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp';
import hypprLogo from '../../images/hypprLogo.svg'
import OtpInput from 'react-otp-input';
import Link from '@material-ui/core/Link';
import './User.css'

export default function Userdialogpop() {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <Button color="primary"  className="hypprbutton" onClick={handleClickOpen}>
      <PersonOutlineSharpIcon fontSize="small"/>
      New User
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
        <div>
        <img src={hypprLogo} alt="hyppr logo"/>
        </div>
        </DialogContent>
        <DialogTitle id="alert-dialog-title">{"Login"}</DialogTitle>
        <DialogContent>
          <div>
        <TextField
              fullWidth
              id="Telnumber"
              type="Tel"
              label="Enter Your Mobile Number"
              placeholder="Enter your Mobile Number"
              margin="normal"
              />
              </div>
              <div>
              <p>Enter the 6 digit OTP sent to your Mobile</p>
                <OtpInput
                
          onChange={otp => console.log(otp)}
          numInputs={6}
          separator={<span className="margin1"></span>}
        />
        </div>
          

        </DialogContent>
        <DialogContent>
          Resend OTP
        </DialogContent>
        
        <DialogActions>
          <div>
        <Button variant="contained" color="secondary" className="greenbutton">
        Verify
</Button>
</div>
          
        </DialogActions>
        <DialogContent>
        <p>By Signing in you agree to our <Link href="#">Terms and Conditions</Link></p>

        </DialogContent>
      </Dialog>
    </div>
  );
}
