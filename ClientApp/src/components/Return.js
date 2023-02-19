import '../style.css';
import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from './Home'


export class Return extends Component {

    constructor(props) {
        super(props);
      }
    render() {
        return(            
            <div>
                <Button className='return-button'>
                <Link to={this.props.path}>Back</Link>
                </Button>
            </div>
        );
    }
}