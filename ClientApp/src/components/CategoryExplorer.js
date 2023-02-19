import '../style.css';
import React, { Component } from 'react';
import { Button, Input, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { BusinessCard } from './BusinessCard';
import { CategoryCard } from './CategoryCard';

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
  
    constructor (props) {
        super(props);
    }


    returnPriceTier(tier){
        let str = "";
        for(let i = 0; i < tier; i++) {
            str = str + "$";
        }
        return str;
    }

    getCategoryCards() {
        let data = [];
        let js = JSON.parse(getTestData());
        for(let i = 0; i < js.local.length; i++) {
            data[i] = (<BusinessCard name = {js.local[i].name} url={js.local[i].banner} tier={ this.returnPriceTier(js.local[i].tier)}/>)
        }
        return data;
    }

    render() {
        return (
            <div>
            {this.getCategoryCards()}
            </div>
        );
    }
}
