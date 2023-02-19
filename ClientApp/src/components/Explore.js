import '../style.css';
import React, { Component } from 'react';
import { Button, Input, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { CategoryCard } from './CategoryCard';
import { Return } from './Return';




export class Explore extends Component {
  static displayName = Explore.name;
  
  state = { data: null };
  
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    fetch('api/get_categories')
      .then(resp => resp.json())
      .then(data => this.setState({data}));
  }

  getCategoryCards() {
    return (this.state.data.map(category => {
        return (<CategoryCard key={category.id} name={category.name} category={category.id} img={category.url}/>);
    }));
  }

  /*
          <Link to="/">
          <Button type="primary" ghost='true'>
            Return
          </Button>
        </Link>
  */

  render() {
        if(this.state.data === null) { 
          return (<p>Loading...</p>);
        }
        else {
          return (
            <div>
              <Return path={'/'}/>
              <Row className='Explorer-Row'>
              {this.getCategoryCards()}
              </Row>
            </div>
          );
        }
  }
}
