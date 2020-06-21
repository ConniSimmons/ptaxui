import React, {Component as RC} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';


export default class Page extends RC {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <section className="page-wrapper">
            <div>
            <Header />
                {this.props.banner}
            
            <main className="content">
                {this.props.children}
            </main>
            
        
            <Footer />
            </div>
        </section>
        )
    }
}