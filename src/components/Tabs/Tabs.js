import React, { Component as RC, useState, useRef} from 'react';
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
        console.log('this.props.children: ', this.props.children);
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
    let [display, setDisplay] = useState('hidden');
    let myRef = useRef(`panel_${props.index}`);
    console.log('display: ', display);
    return (
        <section ref={myRef} className={`tab-panel ${display || ''}`}>
            {props.children}
        </section>
    )
}