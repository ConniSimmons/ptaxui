import React, {Component as RC} from 'react';
import Logo from './Logo';
import Navigation from './Navigation/Navigation';

export default class Header extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <header className="main-header">
                <Logo />
                <Navigation />
                
            </header>
        )
    }
}