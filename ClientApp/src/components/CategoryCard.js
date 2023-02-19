import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Card } from 'antd';
const { Meta } = Card;

const gridStyle = {
    textAlign: 'center',
    margins: '50px',
    width: '250px',
    height: '250px'
  };

  const labelStyle = {
    scale: '2'
  };

export class CategoryCard extends Component {
    render() {
        return(
            <Link to={"/explore-" + this.props.category}>
                <Button style={gridStyle}>
                <img src="https://m.media-amazon.com/images/I/51VXgNZFIoL.jpg" width='35%'/>
                <br/>
                <label style={labelStyle}>{this.props.name}</label>
                </Button>
            </Link>
        )
    }
}