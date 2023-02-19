import '../style.css';
import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';


export class Claim extends Component {
    render() {
        return(
            <div className='Claim-Header'>
                <label className='Claim-Text'>Does this business belong to you?</label><br/>
                <Link className='Claim-Header' to="/claim">
                    <Button className='Claim-Button'>Claim this Business</Button>                
                </Link>
            </div>
        )
    }
}