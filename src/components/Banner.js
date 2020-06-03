import React, {Component as RC} from 'react';
import './Banner.scss';

export default class Banner extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
      let bannerStyle;
      if (this.props.image)
      {
          bannerStyle = {
              backgroundImage: `url(${this.props.image})`,
          };
      }
      return(
          <section id="border-spec" className="banner" style={bannerStyle}>
              <bold></bold>{this.props.title}
              <p className="banner-content">{this.props.content}</p>
          </section>
      )
  }
}