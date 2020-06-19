import React, {Component as RC} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import Header from './Header';
import Footer from './Footer';


export default class Page extends RC {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <section className="page-wrapper">
            <Header />
                {this.props.banner}
            <PerfectScrollbar>
            <main className="content">
                {this.props.children}
            </main>
            </PerfectScrollbar>
            <Footer />
        </section>
        )
    }
}