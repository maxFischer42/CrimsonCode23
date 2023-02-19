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
                <ProfileHeader name="Test Name" banner="https://images.unsplash.com/photo-1597251147933-2473060caa68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1YmJlciUyMGR1Y2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                address="123 Duck Blvd." tier="$$$" hours={this.convertToTimeRange([9, 23])}/>
                <ProfileCard title="About" data="Quack"/>
                <Claim/>
            </div>
        );
    }

}