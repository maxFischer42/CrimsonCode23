import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Card } from 'antd';
const { Meta } = Card;


export class BusinessCard extends Component {
    render() {
        return(
            <Card
            hoverable
            style={{
                width: 280,
            }}
            cover={<img alt="example" src="https://www.cnet.com/a/img/resize/3b18f6ed3e7b91463c841727d52f861438e69523/hub/2018/07/20/b446e3db-e3ec-4b26-b04e-b69c79a82386/rubber-duck-eva-rinaldi-flickr-cc-by-sa-20.jpg?auto=webp&fit=crop&height=1200&width=1200" />}
            >
            <Meta title="Duck and Co" description="Entertainment" />
            </Card>
        )
    }
}