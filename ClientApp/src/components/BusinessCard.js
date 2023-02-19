import '../style.css';
import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Card } from 'antd';
const { Meta } = Card;


export class BusinessCard extends Component {
    render() {
        return(
            <Link to="/business">
                <Card
                className='BusinessCard'
                hoverable
                cover={<img src={this.props.url} />}
                >
                <Meta className='BusinessCard-Meta' title={this.props.name} description={this.props.tier} />
                </Card>
            </Link>
        )
    }
}