import '../style.css';
import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Card } from 'antd';
const { Meta } = Card;

  const labelStyle = {
    scale: '2'
  };

export class CategoryCard extends Component {
    render() {
        return(
            <Link to={"/explore-" + this.props.category}>
                <Button className='Category-Tile'>
                <img src="https://m.media-amazon.com/images/I/51VXgNZFIoL.jpg" width='35%'/>
                <br/>
                <label style={labelStyle}>{this.props.name}</label>
                </Button>
            </Link>
        )
    }
}