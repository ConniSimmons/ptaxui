import React, { Component as RC } from "react";
import "./BdayCalc.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyFormat from 'react-currency-format';

// number of ms in a yr
const YEAR = 1000 * 60 * 60 * 24;
export default class BdayCalc extends RC {

  constructor(props) {
    super(props);
      this.state = {
          bday: '',
          tax: '',
    };
  }

  handleSelect = (event) => {
      this.setState({
      bday: event
    })
  }

  handleSubmit = (event) => { 
    event.preventDefault();
      this.calculateTax();
      this.shock();
  }
   
  calculateTax = () => {
    let tax = Math.round(((Date.now() - this.state.bday.getTime()) / YEAR) * 3);
    this.setState({
      tax
    })    
  }

  shock = () => {
    let shockmsg = `Can you believe it?! You have needlessly spent this much more than a guy for equivalent products, simply because they were packaged to appeal to you! We know we're girls. Do we really need special packaging to prove it?  NO. WE. DON'T!`;
    this.setState({
      shockmsg
    })   
  }

  render() {
    const bday = new Date();
    return (
      <div className="container">
        <div class="shock">
          <b>Are you prepared to be disillusioned?</b>
        </div>
        <br></br>
        <h1 class="bdayquest">Tell us your birthday, and we'll confound you with the truth. . .  </h1>   
        <br></br>    
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>Select Date: </label>
              <DatePicker 
                selected={this.state.bday}
                onSelect={this.handleSelect}
                maxDate={(new Date())}
                showYearDropdown
                dateFormatCalendar="MMMM"
                yearDropdownItemNumber={100}
                scrollableYearDropdown
                placeholderText="MM/DD/YYYY"
              />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">Go!</button>
          </div>
        </form>
        <div className="taxoutput">
          <CurrencyFormat value={this.state.tax} displayType={'text'} thousandSeparator={true} prefix={'$'} 
          />
          </div>
          <div className="taxoutputs">
          {this.state.shockmsg}
        </div>
      </div>
    );
  }
}

