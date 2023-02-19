import React, { Component } from 'react';
import { Button, Input, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { BusinessCard } from './BusinessCard';
import { CategoryCard } from './CategoryCard';



export class CategoryExplorer extends Component {
  static displayName = CategoryExplorer.name;
  
  state = { data: null }
  
  constructor (props) {
    super(props);

    // Here we will need to call to the server to request all locations with the given tag
    // For now though, we will use "testingData.js" to get our testing data
  }

  componentDidMount() {
    fetch('api/get_cards_from_category/' + this.props.category)
      .then(resp => resp.json())
      .then(data => this.setState({data}));
  }

  getCards() {
    return (this.state.data.map(business => {
        return (<BusinessCard key={business.id} name={business.name} id={business.id}/>);
    }));
  }

  render() {
    if(this.state.data === null) { 
      return (<p>Loading...</p>);
    }
    else {
      return (
        <div>
          <Row style={{overflow: 'auto'}}>
              {this.getCards()}
          </Row>
        </div>
      );
    }
  }
}
