import '../style.css';
import React, { Component } from 'react';
import { Button, Input, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { BusinessCard } from './BusinessCard';
import { CategoryCard } from './CategoryCard';
import { Return } from './Return';

const business = '{"local":[ '+
'{"name": "name_1", "banner": "https://images.unsplash.com/photo-1603736087997-5daec6092347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cnViYmVyJTIwZHVja3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", "tier": "2"},' +
'{"name": "name_2", "banner": "https://images.unsplash.com/photo-1620447789324-fd300c136721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cnViYmVyJTIwZHVja3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", "tier": "1"},' +
'{"name": "name_3", "banner": "https://images.unsplash.com/photo-1601829534265-66684bd4dcc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJ1YmJlciUyMGR1Y2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "tier": "3"}' +
']}';



const getTestData = () => {
    return business;
}

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

  /*getCategoryCards() {
    let data = [];
    let name = ["Food", "Hobbies", "Entertainment", "Groceries", "Sports", "Music", "Hair", "Clothing"]
    for(let i = 0; i < name.length; i++) {
        data[i] = (<CategoryCard name={name[i]}/>);
    }
    return data;
  }*/

  getCards() {
    return (this.state.data.map(business => {
        console.log(business);
        return (<BusinessCard key={business.id} name={business.name} id={business.id} tier={business.price_tier} url={business.banner}/>);
    }));
  }

  render() {
    if(this.state.data === null) { 
      return (<p>Loading...</p>);
    }
    else {
      return (<div>
         <Return path={'/explore'}/>
  
      <div className='Business-List-Container'>
          <h1 className='Business-List-Title'>{this.props.category}</h1>
          {this.getCards()}
      </div>
      </div>
    );
  }
}
}