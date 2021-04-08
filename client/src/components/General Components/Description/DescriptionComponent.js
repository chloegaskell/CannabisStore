import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../HeaderComponent';
import InventoryButton from  '../inventorybutton';
import PropTypes from "prop-types";

let theme = createMuiTheme({
    typography: {
      h5: {
          fontWeight: 500,
          fontSize: 26,
          letterSpacing: 0.5,
      },
    },
    palette: {
      primary: {
        light: '#63ccff',
        main: '#006400',
        dark: '#006db3',
      },
    },
    shape: {
      borderRadius: 8,
    },
  });
  
  theme = {
    ...theme,
    overrides: {
      MuiDrawer: {
        paper: {
          backgroundColor: '#18202c',
        },
      },
      MuiButton: {
        label: {
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
      },
      MuiTabs: {
        root: {
          marginLeft: theme.spacing(1),
        },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: theme.palette.common.white,
        },
      },
      MuiTab: {
        root: {
          textTransform: 'none',
          margin: '0 16px',
          minWidth: 0,
          padding: 0,
          [theme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0,
          },
        },
      },
      MuiIconButton: {
        root: {
          padding: theme.spacing(1),
        },
      },
      MuiTooltip: {
        tooltip: {
          borderRadius: 4,
        },
      },
      MuiDivider: {
        root: {
          backgroundColor: '#404854',
        },
      },
      MuiListItemText: {
        primary: {
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
      MuiListItemIcon: {
        root: {
          color: 'inherit',
          marginRight: 0,
          '& svg': {
            fontSize: 20,
          },
        },
      },
      MuiAvatar: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
    props: {
      MuiTab: {
        disableRipple: true,
      },
    },
    mixins: {
      ...theme.mixins,
      toolbar: {
        minHeight: 48,
      },
    },
  };
  

const styles = theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 50,
    },
    card: {
        height: "50",
        width:"100vh"
      },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    button: {
        marginTop: 0,
        marginBottom: 0,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    grid: {
        marginTop: 30,
        marginLeft: 30
    },
    appContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      },
      mainContent: {
        flex: 1,
        //padding: '48px 36px 0',
        background: '#eaeff1',
      },
    
    });
    
  
    



class DescriptionComponent extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
      clickHandler: PropTypes.func,
    }
  


    render() {
        const {classes, cart} = this.props;


        return (  
            <ThemeProvider theme={theme}>
            <div className={classes.root}>

            <CssBaseline />
          <div className={classes.appContent}>
            <Header />
            <main className={classes.mainContent}>
            

            
            <Grid item xs={12} className={classes.grid}>
            <Card className={classes.card}>
                <CardMedia
                className={classes.media}
                image={cart[0].pictureURL}
                title={cart[0].name}
                />
                <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                {cart[0].name}
                </Typography>
                <Typography component="p">
                    ${cart[0].price}
                </Typography>
                <Typography component="p">
                    {cart[0].description}
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" color="primary" className={classes.button}  component={Link} to="/Checkout">
                        Purchase Product
                    </Button>
                    <InventoryButton name={cart[0].id} />

                </CardActions>
            </Card>
        </Grid>
        </main>
          </div>
          </div>

        </ThemeProvider>
    )
}

}



export default withStyles(styles)(DescriptionComponent)








