import React, { Component as RC, useState} from 'react';
import './Tabs.scss';

export class Tabs extends RC {
    constructor()
    {
        super();
        this.state = {
            currentTab: 0,
        };
    }
    componentDidMount()
    {
        const firstChild = this.props.children[0];
        console.log('firstChild: ', firstChild);
    }
    render()
    {
        return (
            <section className="tab-container">
                <section className="tab-list">
                    {this.props.tabs}
                </section>
                <section className="tab-panels">
                    {this.props.children}
                </section>
            </section>
        )
    }
}
export function Tab(props)
{
    return (
        <button className="tab-button" onClick={props.handleClick}>{props.label}</button>
    )
}

export function TabPanel(props)
{
    let [display, setDisplay] = useState(false);
    return (
        <section className={`tab-panel ${props.display || ''}`}>
            {props.children}
        </section>
    )
}