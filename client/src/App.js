
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainFlower from './components/Flower Component/MainFlower';
import MainVape from './components/Vape Component/MainVape';
import MainEdibles from './components/Edible Component/MainEdibles';
import MainAccessories from './components/Accessories Component/MainAccessories';
import Confirmation from './components/General Components/Confirmation/Confirmation';
import Description from './components/General Components/Description/Description';
import Checkout from './components/General Components/Checkout/Checkout';
import Display from './components/General Components/ageVerify';

const styles = {
  root: {
    flexGrow: 1,
  }
};


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div className={classes.root}>
          <Route exact path="/Flowers" component={MainFlower} />
          <Route exact path="/Vapes" component={MainVape} />
          <Route exact path="/Edibles" component={MainEdibles} />
          <Route exact path="/Accessories" component={MainAccessories} />
          <Route exact path="/Confirmation" component={Confirmation} />
          <Route exact path="/productdescription" component={Description} />
          <Route exact path="/Checkout" component={Checkout} />
          <Route exact path="/" component={Display} />

        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
