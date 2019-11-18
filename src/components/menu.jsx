import React from 'react';
import { Menu, Popup, List, Button, Image } from "semantic-ui-react";

const MenuComponent = () => (
      <Menu>
        <Menu.Item
          name='browse'
       
          onClick={this.handleItemClick}>
          Browse
        </Menu.Item>

        <Menu.Item
          name='submit'
        
          onClick={this.handleItemClick}>
          Submit
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
           
            onClick={this.handleItemClick}>
            Sign Up
          </Menu.Item>

          <Menu.Item
            name='help'
         
            onClick={this.handleItemClick}>
            Help
          </Menu.Item>
        </Menu.Menu>
       </Menu>
);

export default MenuComponent;

