import React, { Component as RC } from "react";
import { Link } from "react-router-dom";
import config from "../config";
import { MergedContext } from "../Context";
import axios from "axios";
import Page from "../components/Page";
import Banner from "../components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";

export default class SubmitItem extends RC {
  constructor(props) {
    super(props);
    this.state = {
      banner: "",
    };
  }

  componentDidMount() {
    this.setState({
      banner: (
        <Banner image="http://midbartherapy.com/wp-content/uploads/2017/02/about-banner-1.jpg" />
      ),
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const category = document.getElementById("category").value;
    const product = document.getElementById("product").value;
    const fprod = document.getElementById("fprod").value;
    const fprice = document.getElementById("fprice").value;
    const mprod = document.getElementById("mprod").value;
    const mprice = document.getElementById("mprice").value;
    const nettax = document.getElementById("nettax").value;
    const taxpcnt = document.getElementById("taxpcnt").value;
    const pic = document.getElementById("pic").value;

    axios({
      method: "POST",
      url: "https://myptaxapi.herokuapp.com/api/prodset",
      data: {
        category: category,
        product: product,
        fprod: fprod,
        fprice: fprice,
        mprod: mprod,
        mprice: mprice,
        nettax: nettax,
        taxpcnt: taxpcnt,
        pic: pic,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Product added!");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Error adding product.");
      }
    }).then(e.target.reset());
}

    handleChange = (event) => {
        this.setState({ id: event.target.value });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        const category = document.getElementById("category").value;
        const product = document.getElementById("product").value;
        const fprod = document.getElementById("fprod").value;
        const fprice = document.getElementById("fprice").value;
        const mprod = document.getElementById("mprod").value;
        const mprice = document.getElementById("mprice").value;
        const nettax = document.getElementById("nettax").value;
        const taxpcnt = document.getElementById("taxpcnt").value;
        const pic = document.getElementById("pic").value;
    
        axios({
            method: "PUT",
            //url: `http://localhost:5555/api/prodset/${this.state.id}`,
            url: `https://myptaxapi.herokuapp.com/api/prodset/${this.state.id}`,
            data: {
              category: category,
              product: product,
              fprod: fprod,
              fprice: fprice,
              mprod: mprod,
              mprice: mprice,
              nettax: nettax,
              taxpcnt: taxpcnt,
              pic: pic,
            },
          })
          .then((res) => {
            console.log('Error updating: ', res);
            console.log(res.data);
          })
          .then(event.target.reset());
    }

  render() {
    return (
      <div className="submitform">
        <Page banner={this.state.banner}>
        <div className="prod_box">
          <form
            id="submititem"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div onChange={this.onChangeValue}>
              <p />
              <select id="category">
                <option value="" disabled selected>Select Product Category</option>
                <option value="Business">Business</option>
                <option value="Kids">Kids</option>
                <option value="Personal Items">Personal Items</option>
                <option value="Sporting Goods">Sporting Goods</option>
              </select>
            </div>
            <br />
            <textarea
              id="product"
              rows="1"
              cols="50"
              placeholder="Product Entry Title"
            ></textarea>
            <br />
            <textarea
              id="fprod"
              rows="1"
              cols="50"
              placeholder="Pink Product"
            ></textarea>
            <br />
            <textarea
              id="fprice"
              rows="1"
              cols="50"
              placeholder="Pink Price"
            ></textarea>
            <br />
            <textarea
              id="mprod"
              rows="1"
              cols="50"
              placeholder="Standard Product"
            ></textarea>
            <br />
            <textarea
              id="mprice"
              rows="1"
              cols="50"
              placeholder="Standard Price"
            ></textarea>
            <br />
            <textarea
              id="nettax"
              rows="1"
              cols="50"
              placeholder="Premium Charged"
            ></textarea>
            <br />
            <textarea
              id="taxpcnt"
              rows="1"
              cols="50"
              placeholder="Percent Overcharged"
            ></textarea>
            <br />
            <textarea
              id="pic"
              rows="1"
              cols="50"
              placeholder="Link to Picture"
            ></textarea>
            <br />
            <textarea
              id="_id"
              rows="1"
              cols="50"
              placeholder="ID# (required to update)"
            ></textarea>
            <br />

            <p>
              <button type="submit" value="Create">
                Share!
              </button>
            </p>
          </form>
          </div>
        </Page>
      </div>
    );
  }
}
