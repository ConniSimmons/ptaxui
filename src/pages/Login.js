import React, { Component as RC } from 'react';
import Page from '../components/Page';
import Banner from '../components/Banner';
import { LoggedInContext } from '../Context';
import { Redirect } from 'react-router-dom';
import { TextField, FormRow } from '../components/FormComponents';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Login extends RC {
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
        let loggedIn = this.context;
            if (loggedIn) {
                return <Redirect to='/submititem' />;
            }
            return (
                <Page banner={this.state.banner}>
                    <div>
                        <h1 class="logintext">Let's help each other buy smarter!</h1>
                        <p>When you see the Pink Tax out in the wild, show the world just how wild it is. Share your findings of side-by-side price comparisons here!
                        </p>
                        <p>Paying more money for everyday purchases makes no sense. That's why we're speaking up about it. Post your findings, because after all. . . pics or it didn’t happen!
                        </p>
                        <h3><center>Sign Up And Start Contributing!</center></h3>
                        <form className="login-form">
                            <FormRow>
                            <label>Username &nbsp;&nbsp;</label>
                            <input type='username' name='username' ></input>
                            </FormRow>
                            <FormRow>
                            <label>Password &nbsp;&nbsp;</label>
                        <input type='password' name='password' value={this.state.password} onChange={this.changeHandler} />
                            </FormRow>
                            <button class="hoverableRedSubmit" onClick={this.props.login}>Login</button>
                        </form>    
                    </div>
                </Page>
        )
    }
}
Login.contextType = LoggedInContext;