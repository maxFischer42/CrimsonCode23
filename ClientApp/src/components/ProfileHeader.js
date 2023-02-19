import '../style.css';
import React, { Component } from 'react';
import { Card } from "antd";

export class ProfileHeader extends Component {
    static displayName = ProfileHeader.name;


    render() {
        return(
            <Card className='Profile-Card'>
                <img className='Profile-Banner' src={this.props.banner}/>
                <p className='Profile-Name'>{this.props.name}</p>
                <p className='Profile-Address'>{this.props.address}</p>
                <p className='Profile-Tier'>{this.props.tier}</p>
                <p className='Profile-Hours'>{this.props.hours}</p>
            </Card>
        );
    }
}