import React, { Component as RC } from 'react';
import Page from '../components/Page';
import Banner from '../components/Banner';
import { LoggedInContext } from '../Context';
import { Redirect } from 'react-router-dom';
import { TextField, FormRow } from '../components/FormComponents';
import { Tabs, Tab, TabPanel } from '../components/Tabs/Tabs';

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
                        title="Let's help each other buy smarter!"
                        content={
                            <div>
                            <p>
                            When you see the Pink Tax out in the wild, show the world just how wild it is. Post your findings of side-by-side price comparisons here!
                        </p>
                        <p>
                            Charging women more money for everyday purchases makes no sense. This is how others are speaking up about it. Post your proof when you see it…because after all, pics or it didn’t happen.
                        </p>
                        </div>
                        }
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
                <Tabs tabs={[
                    <Tab label="Sign Up" index={0} />,
                <Tab label="Sign In" index={1} />
                ]} >
                    <TabPanel>Test 1</TabPanel>
                    <TabPanel>Test 2</TabPanel>
                </Tabs>
        
                <h3>Sign Up And Start Contributing!</h3>
                <form className="login-form">
                    <FormRow>
                        <TextField label="Username" name='username' />
                    </FormRow>
                    <FormRow>
                        <label>Password</label>
                        <input type='password' name='password' />
                    </FormRow>
                </form>

                <button onClick={this.props.login}>Login</button>
               
            </Page>
        )
    }
}
Login.contextType = LoggedInContext;