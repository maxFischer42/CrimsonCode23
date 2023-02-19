import React, { Component } from 'react';
import { Button, Input, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { CategoryCard } from './CategoryCard';



export class Explore extends Component {
  static displayName = Explore.name;
  
  constructor(props) {
    super(props);
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
