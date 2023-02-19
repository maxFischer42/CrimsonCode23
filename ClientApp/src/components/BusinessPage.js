import '../style.css';
import React, { Component } from 'react';
import { Button, Input, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { ProfileHeader } from './ProfileHeader';
import { ProfileCard } from './ProfileCard';

export class BusinessPage extends Component {
    static displayName = BusinessPage.name;
 
    render() {
        return(
            <div>
                <ProfileHeader name="Test Name" banner="https://images.unsplash.com/photo-1597251147933-2473060caa68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1YmJlciUyMGR1Y2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                address="123 Duck Blvd." tier="$$$" hours={[9, 22]}/>
                <ProfileCard title="About Us" data="Quack"/>
            </div>
        );
    }

}