import '../style.css';
import React, { Component } from 'react';
export class Logo extends Component {
    static displayName = Logo.name;
    render() {
        return(
            <div>SPARKLE<img className='LogoIMG' src='https://cdn3.emoji.gg/default/twitter/sparkles.png'/></div>
        )
    }
}