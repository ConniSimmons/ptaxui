import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {LoggedInContext} from '../Context';

export default class SecureRoute extends React.Component {
    render()
    {
        // destructure object
        let {component, path} = this.props;
        /* destructuring is shorthand for....
        let component = this.props.component;
        let path = this.props.path;
        IF
        this.props = {
            component: 'some val',
            path: 'some val',
        }
        */
        let loggedIn = this.context;
        if (!loggedIn)
        {
            component = <Redirect to="/login" />
        }
        return (
            <Route exact path={path}>
                {component}
            </Route>
        )
    }
}

SecureRoute.contextType = LoggedInContext;