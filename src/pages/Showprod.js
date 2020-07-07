/*import React, {Component as RC} from 'react';
import {Link} from 'react-router-dom';
import config from '../config';
import Page from '../components/Page';
import {MergedContext} from '../Context';
import './App.scss';

export default class Showprod extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            prodset: [],
            prodList: null,
        };
    }
    deleteMe = (event) =>
    {
        const prodset = event.target.getAttribute('prodset');
        let route = `${config.apiPath}/api/product/${prodset}`;
        const fetchOptions = {
            method: 'DELETE',
        };
        fetch(route, fetchOptions)
        .then((response) =>
        {
            return response.json();
        })
        .then((data) =>
        {
            console.log('should have deleted: ', data);
            this.fetchProdset();
        })
        .catch((err) =>
        {
            console.log('Error deleting product: ', err);
        })
    }
    fetchCharacters = () =>
    {
        let route = `${config.apiPath}/api/prodset`;
        fetch(route)
        .then((response) =>
        {
            // waits for the entire response stream
            // returns parsed json from the stream
            return response.json();
        })
        .then((data) =>
        {
            // do somethign with the data
            this.setState({
                prodset: data,
                prodList: data.map((prodset) =>
                {   
                    return (
                        <li key={`prod_${prodset._id}`}>
                        <Link to={{pathname: '/create-product', charId: prodset._id}}>{prodset.product}</Link>
                        <button onClick={this.deleteMe} prodset={prodset._id}>x</button>
                    </li>

                    )
                }),
            });
        })
        .catch((err) =>
        {
            console.log('Error fetching products: ', err);
        });
    }
    componentDidMount() {
        console.log('my context: ', this.context);
        this.fetchProducts();
    }
    render()
    {
        let user = this.context.loggedInUser;
        return(
            <Page>
                <section className="profile-page constrain">
                    <section className="player-info">
                        <h3 className="player-name">{user.displayName}</h3>
                    </section>
                    <div>
                        <h3>My Characters</h3>
                        <ul>
                            {this.state.charList}
                        </ul>
                    </div>
                </section>
            </Page>
        )
    }
}
Home.contextType = MergedContext;
*/