import React from 'react';
import {Menu, Popup, List, Button, Image, Icon} from "semantic-ui-react";
import style from './Menu.module.scss'


const CartComponent = ({title, id, image, removeFromCart}) => (


    <List selection divided animated verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
                <Button onClick={removeFromCart.bind(this, id)}
                        color={'red'}>Видалити</Button>
            </List.Content>
            <Image avatar src={image}/>
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
);
const MenuComponent = ({totalPrice, count, items}) => (
    <Menu>
        <Menu.Item name='header' header={true} className={style.logo}>
            <Image
                src='https://github.com/VolodymyrPerun/react-it-booking-shop-master/blob/master/assets/Logo.png?raw=true'
            />
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item name='price'>
                Всього: &nbsp; <b>{totalPrice}</b>&nbsp; грн.
            </Menu.Item>
            <Popup
                trigger={
                    <Menu.Item name='cart'>
                        <Icon name={'cart arrow down'}/>
                        Корзина ( <b>{count}</b> )
                    </Menu.Item>
                }
                content={items.map(book => <CartComponent {...book}/>)}
                on="click"
                hideOnScroll
            />
        </Menu.Menu>
    </Menu>
);

export default MenuComponent;

