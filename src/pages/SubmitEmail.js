//* Taken from Brian's CreateChar Page

import React, {Component as RC} from 'react';
import Page from '../components/Page';
import Banner from '../components/Banner';
import '../components/FormStyles.scss';
import axios from 'axios';

export default class SubmitEmail extends RC {
  constructor(props) {
    super(props);
    this.state = {
      banner: ''
  };
}
componentDidMount()
{
  this.setState({
      banner: <Banner 
      image='http://midbartherapy.com/wp-content/uploads/2017/02/about-banner-1.jpg'
      title=""
      />
  });
}

handleSubmit(e){
  e.preventDefault();
  const firstname = document.getElementById('firstname').value;
  const emailid = document.getElementById('emailid').value;
    axios({
      method: "POST", 
      url:"http://localhost:5555/api/mailinglist", 
      data: {
          firstname: firstname,
          emailid: emailid,
      }
      
  }).then(  e.target.reset()
  )
  }

  
  render() {
    return (
      <Page banner={this.state.banner}>
        <div class="emailpg">
        <h1>Let's keep in touch!</h1>
        <p>We would like to keep you up to date on PTax news and events.</p>
        <p>We won't kiss and tell. We promise!</p>
          <p><small>*Your personal information will always be confidential.*</small></p>
        <h3>Sign Up to Get Started!</h3>
        <form id="mailinglist" onSubmit={this.handleSubmit.bind(this)} method="POST">
        <div onChange={this.onChangeValue}>
          <label for="firstname">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First Name&nbsp;</label>
          <input type="text" id="firstname" />
            </div>
          <div>
         <label for="emailid">Email Address&nbsp;</label>
         <input type="email" id="emailid" aria-describedby="emailHelp" />
           </div>
         <button class="hoverableRedSubmit" type="submit" value="Submit" >Submit</button>
        </form>
        </div>
      </Page>
    );
  }
}

  
  

