import React from "react";
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Display extends React.Component {
  state = {
    selected_year: 0,
    day: 4,
    year: 2021,
    month: "March",
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    is_18: false,
    age_message: "",
  };
  constructor(props) {
    super(props);
    this.years = Array.from(
      new Array(122),
      (val, index) => -index + this.state.year
    );

    this.days = Array.from(new Array(31), (val, index) => (index += 1));
  }

  changeyear = async (e) => {
    this.setState({ year: e.target.value });
  };

  changemonth = async (e) => {
    this.setState({ month: e.target.value });
  };

  changeday = async (e) => {
    this.setState({ day: e.target.value });
  };

  verifyage = async (e) => {
    if (2021 - this.state.year > 18) {
      this.state.is_18 = true;
      this.setState({ age_message: "Meets Age Requirements" });
    } else {
      this.setState({ age_message: "Not Permitted to Enter Site" });
    }
  };
  render() {
    return (
      <>
        <div className="App" align="center">
        <Typography variant="h5" align="center" color="#404854" paragraph>
        Please Enter Your Date of Birth:
            </Typography>

          <Select align="center" onChange={this.changemonth}>
            {this.state.months.map((time) => {
              return <option value={time}> {time} </option>;
            })}
          </Select>

          <Select align="center" onChange={this.changeday}>
            {this.days.map((year, index) => {
              return (
                <option key={`year${index}`} value={year}>
                  {year}
                </option>
              );
            })}
          </Select>

          <Select align="center" onChange={this.changeyear} value={this.state.year}>
            {this.years.map((year, index) => {
              return (
                <option key={`year${index}`} value={year}>
                  {year}
                </option>
              );
            })}
          </Select>
          <br>
          </br>
          <Button onClick={this.verifyage} color="primary" align="center"  component={Link} to="/Flowers">Verify Age</Button>
          
          <h1> {this.state.age_message} </h1>
          
        </div>
      </>
    );
  }
}
