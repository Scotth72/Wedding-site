import React from 'react';
import '../App.css';
import {Tabs,TabPane} from 'antd';

import About from '../components/About';


const NavBar = () => {

   const {TabPane} = Tabs;

   
        return (
        <div>   
            <Tabs>    
                <TabPane tab="About" key="3">
                <div id="about">{<About />}</div>
            </TabPane>
            </Tabs> 
        </div>       

        )           
}

export default NavBar;
