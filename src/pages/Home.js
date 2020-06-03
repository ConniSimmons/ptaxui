//todo render <BdayCalc /> when it has been rebuilt

import React, { Component as RC } from "react";
import BdayCalc from "../components/BdayCalc";
import Page from "../components/Page";
import Banner from "../components/Banner";
import "./Home.scss";

export default class Home extends RC {
  constructor(props) {
    super(props);
    this.state = {
      banner: '',
    }
  }
    componentDidMount() {
      this.setState({
        banner: <Banner
        image='http://midbartherapy.com/wp-content/uploads/2017/02/about-banner-1.jpg'
        title="Are you ready to be shocked?"
        />
      })
    }
    render() {
      return(
        <Page banner={this.state.banner}>
              
    </Page>
      )
    }
  }

