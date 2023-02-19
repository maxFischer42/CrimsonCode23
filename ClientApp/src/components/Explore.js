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
    let name = ["Food", "Hobbies", "Entertainment", "Groceries", "Sports", "Music", "Hair", "Clothing"];
    let category = ["food", "hobbies", "entertainment", "groceries", "sports", "music", "hair", "clothing"];
    for(let i = 0; i < name.length; i++) {
        data[i] = (<CategoryCard name={name[i]} category={category[i]}/>);
    }
    return data;
  }

  /*
          <Link to="/">
          <Button type="primary" ghost='true'>
            Return
          </Button>
        </Link>
  */

  render() {
    return (
      <div>
        <Row style={{overflow: 'auto'}}>
            {this.getCategoryCards()}
        </Row>
      </div>
    );
  }
}
