import React from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';



export default class InventoryButton extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        orange: PropTypes.bool,
        wide: PropTypes.bool,
      };
    
    constructor(){
        super()
        this.state = {
            //Prudct inventory
            inventory: 0,
            //Whether the inventory has been loaded in from backend
            isloaded: false
        }
    }

    
    changeInventory () {
        this.setState({
            inventory: this.state.inventory
        })
        this.handleSubmit()
    }

    //Get Inventory from server when the component mounts
    componentDidMount() {
        
        this.handleSubmit()
          .then((res) => this.setState({ inventory: res.express }))

          //.catch((err) => console.log(err));
          
      }
    
      callApi = async () => {
        const response = await fetch("/api/hello");
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
      };

      handleSubmit = async () => {

        const response = await fetch("/api/getinventory", {
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
          
        <Button color="secondary" onClick={() => this.changeInventory()}>
            {this.state.isloaded ? 'Inventory: ' +  this.state.inventory: 'Loading..'}
            </Button>
      </div>
    );
  }
}