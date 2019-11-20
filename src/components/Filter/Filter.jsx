import React from 'react';
import { Menu } from 'semantic-ui-react'

const Filter = ({setFilter, filterBy}) =>
      (<Menu >
        <Menu.Item
          active={filterBy === 'all'}
          onClick={setFilter.bind(this, 'all')}
        >
          Всі
        </Menu.Item>
    
        <Menu.Item
          active={filterBy === 'rating'}
          onClick={setFilter.bind(this, 'rating')}
        >
          Популярні
        </Menu.Item>
    
        <Menu.Item
          active={filterBy === 'price_hight'}
          onClick={setFilter.bind(this, 'price_hight')}
        >
        Ціна(Дорогі)
        </Menu.Item>
    
        <Menu.Item
          active={filterBy === 'price_low'}
          onClick={setFilter.bind(this, 'price_low')}
        >
          Ціна(Дешеві)
        </Menu.Item>
    
        <Menu.Item
          active={filterBy === 'author'}
          onClick={setFilter.bind(this, 'author')}
        >
          Автор
        </Menu.Item>

        <Menu.Item
          active={filterBy === 'year'}
          onClick={setFilter.bind(this, 'year')}
        >
          Рік публікації
        </Menu.Item>
       
      </Menu>
     );
 

  export default  Filter;