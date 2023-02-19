import '../style.css';
import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { Explore } from "./Explore";
import { NavMenu } from './NavMenu';
import { Link } from 'react-router-dom';
import { BusinessCard } from './BusinessCard';
import { Logo } from './Logo';

const temp_recommend = '{"local":[ '+
'{"name": "Recommended Business 1", "banner": "https://images.unsplash.com/photo-1603736087997-5daec6092347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cnViYmVyJTIwZHVja3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", "tier": "2"},' +
'{"name": "Recommended Business 2", "banner": "https://images.unsplash.com/photo-1620447789324-fd300c136721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cnViYmVyJTIwZHVja3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", "tier": "1"},' +
']}';

const getRec = () => {
  return temp_recommend;
}

export class Home extends Component {

  static displayName = Home.name;
  


render() {
  return (
    <div>
        <NavMenu />
        <div className='Logo'><Logo /></div>
      <div className='Explore'>
        <Input className="Searchbar" placeholder="Search..." size="small"/>
        <Link className="ExploreLink" to="/explore">
          <Button className='ExploreButton' type="primary">
            Explore!
          </Button>
        </Link>
        <img src='../img/sp2.png'/>
      </div>
      </div>
    );
  }
}
