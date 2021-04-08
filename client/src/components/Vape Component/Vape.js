import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from '../General Components/HeaderComponent';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IndividualProduct from '../General Components/IndividualProduct';


const styles = theme => ({
    root: {
        flexGrow: 1,
        paddingLeft: 26,
        paddingTop: 70,
    },
    icon: {
        marginRight: theme.spacing(2),
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
});


class Vape extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        const { classes, inventory, addToCart } = this.props;

        
        return (
            <div className={classes.root}>
            <Header
            leftComponent={Header}/>

<div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Vapes
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Shop our 510 thread vape cartridges and starter kits. Whether you like indica-dominant, sativa-dominant, hybrid, high-THC or high-CBD, there's something for everyone.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={1} justify="center">
                <Grid item>

                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    More Information
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          </div>

                <Grid container spacing={16}> 
                    {inventory.map(item => (
                          <>
                          {item.type === "vape" && (
                                                    <IndividualProduct item={item} addToCart={addToCart} key={item.id}/>

                          )}
                        </>
                    ))}
                </Grid> 
                </div>

        )
    }
}

Vape.propTypes = {
    classes: PropTypes.object.isRequired,
    inventory: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired
}

export default withStyles(styles)(Vape)
