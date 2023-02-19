import React, { Component } from 'react';
import { Button, Input, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { BusinessCard } from './BusinessCard';
import { CategoryCard } from './CategoryCard';



export class Explore extends Component {
  static displayName = Explore.name;
  
  constructor (props) {
    super(props);

    // Here we will need to call to the server to request all locations with the given tag
    
  }


  getCategoryCards() {
    let data = [];
    let name = ["Food", "Hobbies", "Entertainment", "Groceries", "Sports", "Music", "Hair", "Clothing"]
    for(let i = 0; i < name.length; i++) {
        data[i] = (<CategoryCard name={name[i]}/>);
    }
    return data;
  }

  render() {
    return (
      <div>
        <Link to="/">
          <Button type="primary" ghost='true'>
            Return
          </Button>
        </Link>
        <Row>
            {this.getCategoryCards()}
        </Row>
      </div>
    );
  }
}
