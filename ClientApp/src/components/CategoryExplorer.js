import React, { Component } from 'react';
import { Button, Input, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { BusinessCard } from './BusinessCard';
import { CategoryCard } from './CategoryCard';



export class CategoryExplorer extends Component {
  static displayName = CategoryExplorer.name;
  
  constructor (props) {
    super(props);

    // Here we will need to call to the server to request all locations with the given tag
    // For now though, we will use "testingData.js" to get our testing data


    
  }


  /*getCategoryCards() {
    let data = [];
    let name = ["Food", "Hobbies", "Entertainment", "Groceries", "Sports", "Music", "Hair", "Clothing"]
    for(let i = 0; i < name.length; i++) {
        data[i] = (<CategoryCard name={name[i]}/>);
    }
    return data;
  }*/

  render() {
    return (
      <div>
        <label>{this.props.category}</label>
      </div>
    );
  }
}
