
import React, {Component} from 'react';
import DescriptionContainer from './DescriptionContainer';
import Grid from '@material-ui/core/Grid';

class Description extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={24}>


                    <Grid item xs={3}>
                        <DescriptionContainer />   
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Description
