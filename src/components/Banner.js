import React, {Component as RC} from 'react';
import './Banner.scss';

export default class Banner extends RC {
    // constructor(props)
    // {
    //     super(props);
    // }
    render()
    {
        let bannerStyle = {};
        if (this.props.image)
        {
            bannerStyle = {
                backgroundImage: `url(${this.props.image})`,
            };
        }
        if (this.props.color)
        {
            bannerStyle.color = this.props.color;
        }
        else 
        {
            bannerStyle.color = '#fff';
        }
        return(
            <section className="banner" style={bannerStyle}>
               
            </section>
        )
    }
}