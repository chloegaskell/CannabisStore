import React from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';


export default class CheckoutButton extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        orange: PropTypes.bool,
        wide: PropTypes.bool,
        clickHandler: PropTypes.func,
      };
    
    constructor(){
        super()
        this.state = {
            value:"Checkout",
            price: 0.0,
            isloaded: false
        }
    }

    
    //Get Inventory from server when the component mounts

    
    decrementInventory = async () => {

      const response = await fetch("/api/decinv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.props.name,
        }),
      });
      const body = await response.json();
      
      if (response.status !== 200) throw Error(body.message);
      this.state.isloaded = true
      return body;
    };


  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];


    return (
      <div className={className.join(" ").trim()}>
        <Button onClick={() => this.decrementInventory()}>
            </Button>
      </div>
    );
  }
}