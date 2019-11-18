import React from 'react';
import {Card, Icon, Image} from "semantic-ui-react";

const BookCard = ({title, author, price, image, year, rating}) => (

    <Card color={'red'} href={'#'}>
        <Image src={image} fluid={true}/>
        <Card.Content textAlign={'center'}>
            <Card.Header >
                <Icon name={'book'} color={'olive'}/>
                <i >Назва книги:</i> {title}
            </Card.Header>
            <Card.Meta>
                <Icon name={'calendar alternate outline'} color={'green'}/>
                <span className='date'>Рік публікації: {year}</span>
            </Card.Meta>
            <Card.Description>
                <Icon name={'user'} color={'teal'}/>
                <Icon name={'pencil alternate'} color={'blue'}/>
                Автор: {author}
            </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign={'center'}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
                <Icon name='money bill alternate outline' color={'blue'}/>
                Ціна: {price} грн
            </a>
        </Card.Content>
        <Card.Content extra textAlign={'center'}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
                <Icon name='star' color={'yellow'}/>
                Рейтинг: {rating} / 5
            </a>
        </Card.Content>
    </Card>
);

export default BookCard;
