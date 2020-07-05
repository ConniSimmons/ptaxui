//* To be built on future project development.  This will display a list of pink and blue items with recommendations to eschew the pink for better pricing.
import React, { Component as RC } from 'react';
import {Link} from 'react-router-dom';
import config from '../config';
import {MergedContext} from '../Context';
import axios from 'axios';
import Page from '../components/Page';
import Banner from '../components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Products extends RC {
    constructor(props) {
        super(props);
        this.state = {
          banner: "",
            prodset: [],
            isLoading: true,
            errors: null
        };
    }
        getProds() {
            axios
            // This is where the data is hosted
            // .get('http://localhost:5555/api/prodset')
            // when it's live:
            .get('https://myptaxapi.herokuapp.com/')
            // Once we get a response and store data, let's change the loading state
            .then(response => {
                console.log(response);
              this.setState({
                prodset: response.data,
                isLoading: false
              });
            })
            // If we catch any errors connecting, let's update accordingly
            .catch(error => this.setState({ error, isLoading: false }));
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
                    <React.Fragment> 
                        
                        <Page banner={this.state.banner}>        
                        <div className="App">       
                            {!isLoading ? (
                                prodset.map(prodset => {
                                    const { _id, category, title, fprod, fprice, mprod, mprice, nettax, taxpcnt, pic } = prodset;
                                    return (
                                        <div className="prod_box" key={_id}>
                                            
                                            <div className="ppic"><img src={pic} width="550" /></div>
                                            <div>
                                            <h3 className="title">{title}</h3>
                                            
                                            <br></br>
                                            <div className="prod">Standard: {mprod}
                                              <p>Price:{mprice}</p></div>
                                            <div className="prod">Repackaged: {fprod} <p>Price: {fprice}</p></div>
                                            <p>PREMIUM: <b>{nettax}</b><br></br>
                                            PTax Percent: <b>{taxpcnt}</b></p>
                                            
                                            </div>
                                         
                                            
                                        </div>
                                    );
                                })
                            ) : (
                                <p>Loading . . .</p>
                            )}        
                            </div>
                        </Page>    
                    </React.Fragment>
                    
                 );
            }
}           
            

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
