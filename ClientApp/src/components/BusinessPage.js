import '../style.css';
import React, { Component } from 'react';
import { Button, Input, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { ProfileHeader } from './ProfileHeader';
import { ProfileCard } from './ProfileCard';
import { Claim } from './Claim';
import { Return } from './Return';

export class BusinessPage extends Component {
    static displayName = BusinessPage.name;
 
    convertToTimeRange(hours) {
        return(
            <div>
            <label>Open at {hours[0]} AM</label> <br/>
            <label>Closes at {hours[1] - 12} PM</label>
            </div>
        )
    }

    render() {
        return(
            <div>
                <Return path={'/explore'}/>
                <ProfileHeader name="Sugar Squares" banner="https://images.unsplash.com/photo-1459789034005-ba29c5783491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=938&q=80"
                address="223 Belgium Ave." tier="$$$" hours={this.convertToTimeRange([7, 19])}/>
                <ProfileCard title="About" data="Waffle-oriented restaraunt; established in 1607."/>
                <Claim/>
            </div>
        );
    }

}