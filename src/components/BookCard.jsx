import React from 'react';
import {Card, Icon, Image} from "semantic-ui-react";

const BookCard = ({title, author, price, image, year, rating}) => (

    <Card>
        <Image src={image}/>
        <Card.Content>
            <Card.Header><i>Назва книги:</i> {title}</Card.Header>
            <Card.Meta>
                <span className='date'>Рік публікації: {year}</span>
            </Card.Meta>
            <Card.Description>
                Автор: {author}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
                <Icon name='uah'/>
                Ціна: {price} грн
            </a>
        </Card.Content>
        <Card.Content extra>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
                <Icon name='uah'/>
                Рейтинг: {rating} / 5
            </a>
        </Card.Content>
    </Card>
);

export default BookCard;
