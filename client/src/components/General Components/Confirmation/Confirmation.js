
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Confirmation extends Component {
    render() {
            return (
                <div>
                    <Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: '80vh' }}>
                        <Typography variant="display3" color="primary" gutterBottom>
                            Transaction Successful!
                        </Typography>
                        
                        <Button component={Link} to="/">Go Back</Button>
                    </Grid>
                    
                </div>
            )
        }
    }

export default Confirmation
