import React, {Component as RC} from 'react';


export default class Footer extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <footer className="main-footer">
            
                <h6><a href="./submitemail">Click HERE to be kept in the loop.</a></h6>
                <p><small>* Site for Informational Purposes Only. *<br></br>* We do not encourage bra burning rallies in violation of social distancing recommendations. *</small></p>
              
            </footer>
        )
    }
}