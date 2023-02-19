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
                cover={<img style={{'border-radius': '25px'}} src={this.props.url} />}
                >
                <label className='Business-Card-Name'>{this.props.name}</label>
                {/*<label className='Business-Card-Tier'>{t}</label>*/}
                </Card>
            </Link>
        )
    }
}