import '../style.css';
import React, { Component } from 'react';
export class Logo extends Component {
    static displayName = Logo.name;
    render() {
        return(
            <div><l>SPARKLE</l><img className='LogoIMG' src='https://cdn3.emoji.gg/default/twitter/sparkles.png'/></div>
        )
    }
}