//* To be built on future project development.  This will display a list of pink and blue items with recommendations to eschew the pink for better pricing.
import React, { Component as RC } from "react";
import { Link } from "react-router-dom";
import config from "../config";
import { MergedContext } from "../Context";
import axios from "axios";
import Page from "../components/Page";
import Banner from "../components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Products extends RC {
  constructor(props) {
    super(props);
    this.state = {
      banner: "",
      prodset: [],
      isLoading: true,
      errors: null,
    };
  }

  getProds() {
    axios
      // This is where the data is hosted
      .get("http://localhost:5555/api/prodset")
      // when it's live:
      //.get('https://myptaxapi.herokuapp.com/')
      // Once we get a response and store data, let's change the loading state
      .then((response) => {
        console.log(response);
        this.setState({
          prodset: response.data,
          isLoading: false,
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch((error) => this.setState({ error, isLoading: false }));
  }

    handleChange = event => {
    this.setState({ id: event.target.value });
    }
    
    handleSubmit = event => {
        event.preventDefault();
    
        axios.delete(`http://localhost:5555/api/prodset/${this.state.id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          }).then(event.target.reset());
      }

    componentDidMount() {
        this.setState({
         banner: (
        <Banner image="http://midbartherapy.com/wp-content/uploads/2017/02/about-banner-1.jpg" />
        ),
        });
        this.getProds();
    }
  render() {
    const { isLoading, prodset } = this.state;
    return (
      <Page banner={this.state.banner}>
        <React.Fragment>
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Product ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
          <div className="App">
            {!isLoading ? (
              prodset.map((prodset) => {
                const {
                  _id,
                  category,
                  product,
                  fprod,
                  fprice,
                  mprod,
                  mprice,
                  nettax,
                  taxpcnt,
                  pic,
                } = prodset;
                return (
           
                  <div className="prod_box" key={_id}>
                    <div className="ppic">
                      <img src={pic} width="550" />
                    </div>
                    
                    <div>
                      <h3 className="product">{product}</h3>

                      <br></br>
                      <div className="prod">
                        Standard: {mprod}
                        <p>Price:{mprice}</p>
                      </div>
                      <div className="prod">
                        Repackaged: {fprod} <p>Price: {fprice}</p>
                      </div>
                      <p>
                        PREMIUM: <b>{nettax}</b>
                        <br></br>
                        PTax Percent: <b>{taxpcnt}</b>
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Loading . . .</p>
            )}
          </div>
        </React.Fragment>
      </Page>
    );
  }
}

