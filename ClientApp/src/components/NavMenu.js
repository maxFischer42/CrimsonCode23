import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import '../style.css';
import { Button } from 'antd';


export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header className='HeaderOptions'>
        <Navbar container light>
          <NavbarToggler className="flex-sm-row-reverse" onClick={this.toggleNavbar} className="mr-2" />
          <Collapse  isOpen={this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <Button/>
                <NavLink tag={Link} className="text-dark" to="/add">Add a Business</NavLink>
                <NavLink tag={Link} className="text-dark" to="/credit">Credits</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
