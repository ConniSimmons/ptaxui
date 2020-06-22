//* To be built on future project development.  This will display a list of pink and blue items with recommendations to eschew the pink for better pricing.
import React, { Component as RC } from 'react';
import Page from '../components/Page';
import Banner from '../components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Products extends RC {
    constructor(props) {
        super(props);
        this.state = {
            banner: ''
        };
    }
    componentDidMount(){
        this.setState({
            banner: <Banner
                        image='http://midbartherapy.com/wp-content/uploads/2017/02/about-banner-1.jpg'
                    />
            });
        }
        render() {
        {
            return(
                <div>
                    <Page><h5><b>Coming Soon. . . </b></h5>
                    <p>Products</p>
                    <p>Personal Items</p>
                    <p>Services</p>
                    <p>Electronics</p>
                    <p>Automotive</p>
                    <p>Submit Your Own Item</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    </Page>
                </div>
            )
        }
    }
}