import React, {Component as RC} from 'react';
import Header from './Header';
import Footer from './Footer';


export default class Page extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
        <section className="page-wrapper">
            <Header />
            {this.props.banner}
            <main className="content">
                {this.props.children}
            </main>
            <Footer />
        </section>
        )
    }
}