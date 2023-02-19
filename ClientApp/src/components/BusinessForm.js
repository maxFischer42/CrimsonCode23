import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class BusinessForm extends Component {
  static displayName = BusinessForm.name;

  render() {
    return (
      <div>
        <Container tag="main">
          {this.props.children}
        </Container>
      </div>
    );
  }
}
