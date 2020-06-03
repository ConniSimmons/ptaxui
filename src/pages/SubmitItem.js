//* To be built on further project development. This will let users submit their own pink tax examples to be added to the database.
//TODO  Make ptax database form on line 20

import React, {Component as RC} from 'react';
import Home from './Home';
import { LoggedInUserContext } from '../Context';
import Page from '../components/Page';

export default class EditProfile extends RC {
    constructor(props)
    {
        super(props);
    }
    render() {
        let user = this.context;
        return(
            <Page>
                <h2>Welcome {user.displayName}!</h2>
                Share your Pink Tax items for the benefit of us all!
                <form></form>
            </Page>
        )
    }
}
Home.contextType = LoggedInUserContext;