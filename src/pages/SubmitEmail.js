//* Taken from Brian's CreateChar Page

import React, {Component as RC} from 'react';
import Page from '../components/Page';
import Banner from '../components/Banner';
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
      banner: <Banner />
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
  }).then((response)=>{
      if (response.data.msg === 'success') {
          alert("Thank you for sharing your email address with PTax!"); 
          this.resetForm()
      } else if (response.data.msg === 'fail') {
          alert("Failed to send.")
          }
      })
  }

  resetForm(){
    document.getElementById('mailinglist').reset();
  }

  render() {
    return (
      <Page banner={this.state.banner}>
        <h1>Let's keep in touch!</h1>
        <p>We would like to keep you up to date on PTax news and events.</p>
        <p>We won't kiss and tell. We promise!</p>
          <p><small>Your personal information will always be confidential.</small></p>
        <h2>Sign Up to Get Started!</h2>
        <form id="mailinglist" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div>
          <label for="firstname">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First Name&nbsp;</label>
          <input type="text" id="firstname" />
            </div><br></br>
          <div>
         <label for="emailid">Email Address&nbsp;</label>
         <input type="email" id="emailid" aria-describedby="emailHelp" />
           </div><br></br>
         <button type="submit">Submit</button>
        </form>
      </Page>
    );
  }
}

  
  

