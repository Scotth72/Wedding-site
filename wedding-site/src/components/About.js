import React, { Component } from 'react'

import { Card} from 'antd';

const About =() =>  {
        return (
            <div className="about-card">
                <Card>
                    <h2>Hannah Way</h2>
                    <p>This is info on bride</p>
                </Card>
                <Card>
                    <h2>Jake</h2>
                    <p>This is info on Groom</p>
                </Card>
                
            </div>
        )
}

export default About;
