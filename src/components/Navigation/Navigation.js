import React, {Component as RC, useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';
import navStructure from './navStructure';

class NavList extends RC{
    constructor(props)
    {
        super(props);
        console.log('constructor props: ', props);
        this.state = {
            navItems: [],
        }
    }

    componentDidMount() {
        this.setState({
            navItems: this.props.structure.map((item, i) =>
            {
                return <NavItem key={`nav_${item.label.toLowerCase()}`} {...item} />
            }),
        });
    }
    render(){
        return (
            <ul className={`nav-list ${this.props.type || 'sub-menu'} ${this.props.visibilityClass || 'menu-visible'}`}>
                {this.state.navItems}
                {this.props.show}
            </ul>
        )
    }
}

class NavItem extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            submenu: null,
            visibilityClass: 'menu-hidden',
        }
    }

    showSub = () =>
    {
        if (this.props.children)
        {
            console.log('should show');
            this.setState({
                visibilityClass: 'menu-visible',
            })
        }

    }
    hideSub = () =>
    {
        if (this.props.children)
        {
            console.log('should hide');
            this.setState({
                visibilityClass: 'menu-hidden',
            })
        }

    }
    render(){

        let submenu = null;
        let item;

        // determine if this nav item has children
        // if so, it should get a sub menu
        if (this.props.children)
        {
            submenu = <NavList structure={this.props.children} visibilityClass={this.state.visibilityClass} />;
        }
        
        if (this.props.route)
        {
            item = <Link className='nav-item' to={this.props.route}>
                {this.props.label}
            </Link>
        }
        else
        {
            item = <span className='nav-item'>{this.props.label}</span>
        }

        return (
            <li onMouseEnter={this.showSub} onMouseLeave={this.hideSub}>
                {item}
                {submenu}
            </li>
        )
    }
}
export default class Navigation extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            navList: null,
        }
    }
    componentDidMount()
    {
        this.setState({
            navList: <NavList structure={navStructure} type='main-menu' />
        })
    }
    render()
    {
        return(
            <nav className="main-nav">
                {this.state.navList}
            </nav>
        )
    }
}