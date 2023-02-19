import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { Explore } from "./Explore";
import { NavMenu } from './NavMenu';
import { Link } from 'react-router-dom';

export class Home extends Component {

  static displayName = Home.name;
  


render() {
  return (
      <div>
        <NavMenu />
        <Input placeholder="Search..." size="small"/>
        <Link to="/explore">
          <Button type="primary">
            Explore
          </Button>
        </Link>
      </div>
    );
  }
}
