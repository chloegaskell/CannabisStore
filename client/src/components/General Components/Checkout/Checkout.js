
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import CheckoutButton from  '../checkoutbutton';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';

const styles = theme => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
    text: {
        marginTop: theme.spacing(2),
    },
    list: {
        padding: theme.spacing(1, 0),
      },
    total: {
        fontWeight: 700,
      },
    });



class CheckoutComponent extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        clickHandler: PropTypes.func,
      };
    
      handleClick = buttonName => {
        Button.handleClick();
      };
    
      handleClickCheck = buttonName => {
        CheckoutButton.handleClick();
      };
    
    
  
  
    handleClickCheck = buttonName => {
      CheckoutButton.handleClick();
      

    }
  

    render() {
        const {classes, cart} = this.props;
        return (
    <div>
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            CANNABIS SHOP
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Typography variant="h6" gutterBottom>
  Shipping address
</Typography>
<Grid container spacing={3}>
  <Grid item xs={12} sm={6}>
    <TextField
      label="First name"
      fullWidth
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
      label="Last name"
      fullWidth
    />
  </Grid>
  <Grid item xs={12}>
    <TextField
      label="Address line 1"
      fullWidth
    />
  </Grid>
  <Grid item xs={12}>
    <TextField
      label="Address line 2"
      fullWidth
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
      label="City"
      fullWidth
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField label="Province" fullWidth />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
      label="Postal code"
      fullWidth
    />
  </Grid>
</Grid>
    <Typography variant="h6" gutterBottom className = {classes.text}>
        Payment Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField label="Name on card" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Card number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Expiry date" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
          />
                            

        </Grid>
        <Button component={Link} to="/Confirmation">Make Purchase</Button>
        <CheckoutButton name="2" clickHandler={this.handleClickCheck} />
        
        







      </Grid>
          </Paper>
          
      </main>
      
      </div>

)
}

}



export default withStyles(styles)(CheckoutComponent)
