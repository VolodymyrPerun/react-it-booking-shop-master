import React from 'react';
import {Menu, Popup, List, Button, Image} from "semantic-ui-react";

const MenuComponent = () => (
    <Menu>
        <Menu.Item name='browse'>
            Магазин книг
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='signup'>
                Всього: &nbsp; <b>0</b>грн.
            </Menu.Item>

            <Menu.Item name='help'>
                Корзина ( <b>0</b> )
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);

export default MenuComponent;
