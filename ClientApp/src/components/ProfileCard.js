import '../style.css';
import { Card } from 'antd';
import Paragraph from 'antd/es/skeleton/Paragraph';
import React, { Component } from 'react';


export class ProfileCard extends Component {
    static displayName = ProfileCard.name;


    render() {
        return(
            <div>
                <Card className='Profile-Card'>
                    <h1 className='Profile-Header'>{this.props.title}</h1>
                    <p className='Profile-Paragraph'>
                        {this.props.data}
                    </p>
                </Card>
            </div>
        );
    }
}