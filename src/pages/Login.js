import React, { Component as RC } from 'react';
import Page from '../components/Page';
import Banner from '../components/Banner';
import { LoggedInContext } from '../Context';
import { Redirect } from 'react-router-dom';
import { FormRow } from '../components/FormComponents';
import 'bootstrap/dist/css/bootstrap.min.css';

// var myId = 1469;

export default class Login extends RC {
    constructor(props) {
        super(props);
        this.state = {
            banner: '',
            username: '',
            password: ''
        };
    }
    // whenever a form field changes, look up the name property
    // in state and change that value to match form field value
    changeHandler = (event) =>
    {
        console.log('changing!')
        const fieldName = event.target.getAttribute('name');
        const stateObj = {};
        stateObj[fieldName] = event.target.value;
        // this is only necessary if you are displaying feedback to the user
        stateObj.feedbackMessage = '';
        stateObj.feedbackType = '';
        
        this.setState(stateObj);
    }
    componentDidMount(){
        this.setState({
            banner: <Banner
                        image='http://midbartherapy.com/wp-content/uploads/2017/02/about-banner-1.jpg'
                    />
        });
    }
    render() {
        let loggedIn = this.context;
            if (loggedIn) {
                return <Redirect to='/submititem' />;
            }
           
            return (
                <Page banner={this.state.banner}>
                   <div>
                        <h1 className="logintext">Let's help each other buy smarter!</h1>
                        <p>When we see the Pink Tax out in the wild, let's show the world just how wild it is. Share your findings of side-by-side price comparisons here!
                        </p>
                        <p>It's senseless to pay more money for everyday purchases. That's why we're speaking up about it. Post your findings, because after all. . . pics or it didn’t happen!
                        </p>
                        <h3><center>Sign Up And Start Contributing!</center></h3>
                        <form className="login-form" onSubmit={this.props.login}>
                        <FormRow>
                            <label>Username &nbsp;&nbsp;</label>
                            <input type='username' name='username' value={this.state.username} onChange={this.changeHandler} />
                        </FormRow>
                        <FormRow>
                            <label>Password &nbsp;&nbsp;</label>
                            <input type='password' name='password' value={this.state.password} onChange={this.changeHandler} />
                        </FormRow>
                            <button class="hoverableRedSubmit" onClick={this.props.login}>Login</button>
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
                        </form>    

                    </div>
                </Page>
        )
    }
}
Login.contextType = LoggedInContext;