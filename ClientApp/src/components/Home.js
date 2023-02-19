import '../style.css';
import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { Explore } from "./Explore";
import { NavMenu } from './NavMenu';
import { Link } from 'react-router-dom';
import { BusinessCard } from './BusinessCard';
import { Logo } from './Logo';


export class Home extends Component {

  static displayName = Home.name;
  


render() {
  return (
    <div>
        <div className='Logo'><Logo /></div>
        <Input className="Searchbar" placeholder="Search..." size="small"/>
        <img className='mainImg_1' src='https://raw.githubusercontent.com/maxFischer42/CrimsonCode23/dea5e7918a029f764252a01c40f7422934f12067/ClientApp/src/SP1.svg'/>
      <img className='mainImg_2' src='https://raw.githubusercontent.com/maxFischer42/CrimsonCode23/dea5e7918a029f764252a01c40f7422934f12067/ClientApp/src/img/sp2.png'/>
      <div className='Explore'>
        <Link className="ExploreLink" to="/explore">
          <Button className='ExploreButton' type="primary">
            Explore!
          </Button>
        </Link>
      </div>
      </div>
    );
  }
}
