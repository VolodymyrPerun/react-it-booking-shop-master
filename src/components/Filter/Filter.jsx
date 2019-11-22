import React from 'react';
import { Menu, Input, Icon } from 'semantic-ui-react'

const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery}) =>
      (<Menu secondary stackable={true} pointing>
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
        Ціна
        <Icon name={'arrow circle down'} />
        </Menu.Item>
    
        <Menu.Item
          active={filterBy === 'price_low'}
          onClick={setFilter.bind(this, 'price_low')}
          
        >
          Ціна  
          <Icon name={'arrow circle up'} />
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

        
        <Menu.Item position='right' stackable={true}>
         <Input icon='search'
          onChange={
           e => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder='Пошук по книгам...' />
        </Menu.Item>

      </Menu>
     );
 

  export default  Filter;