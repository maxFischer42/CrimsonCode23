import '../style.css';
import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Card } from 'antd';
const { Meta } = Card;

  const labelStyle = {
    
  };

export class CategoryCard extends Component {
    render() {
        return(
            <Link to={"/explore-" + this.props.category}>
                <Button className='Category-Tile'>
                <img className='Category-Thumb' src={this.props.img} width='35%'/>
                <br/>
                <label className='Category-Title'>{this.props.name}</label>
                </Button>
            </Link>
        )
    }
}