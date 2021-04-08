import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 40,
    },
    card: {
        maxWidth: 400,
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
    }
});


class IndividualProduct extends Component {

    constructor(props) {
        super(props);

    
    }



    render() {
        const {classes} = this.props;
        const {item} = this.props;
        const {addToCart } = this.props;

        return (  
            <Grid item xs={3} className={classes.grid}>
                <Card className={classes.card} key={item.id}>
                    <CardMedia
                    className={classes.media}
                    image={item.pictureURL}
                    title={item.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {item.name}
                    </Typography>
                    <Typography component="p">
                        ${item.price}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" className={classes.button} component={Link} to="/productdescription" onClick={() => addToCart(item)} >
                            View Item
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
    
}


IndividualProduct.propTypes = {
    item: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired

}

export default withStyles(styles)(IndividualProduct)
