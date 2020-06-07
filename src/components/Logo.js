import React, {Component as RC} from 'react';
import {AppNameContext} from '../Context';

export default function Logo()
{
    return (
        <AppNameContext.Consumer>
            {(appName) => (
                <div className="logo">
                {appName}
            </div>
            )}
        </AppNameContext.Consumer>
    )
}
