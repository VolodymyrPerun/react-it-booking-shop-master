import React from 'react';
import {Card, Icon, Image} from "semantic-ui-react";
import style from './BookCard.module.scss'

const BookCard = ({title, author, price, image, year, rating}) => (

    <Card color={'red'} href={'#'} className={style.Card}>
        <Image src={image} fluid={true} className={style.CardImg}/>
        <Card.Content textAlign={'center'}>
            <Card.Header className={style.ItemName}>
                <Icon name={'book'} color={'olive'}/>
                <span><i>Назва книги: </i></span>{title}
            </Card.Header>
            <Card.Meta>
                <Icon name={'calendar alternate outline'} color={'green'}/>
                <span className='date'>Рік публікації: </span>
                <span className={style.dateNumber}>{year}</span>
            </Card.Meta>
            <Card.Description>
                <Icon name={'user'} color={'teal'}/>
                <Icon name={'pencil alternate'} color={'blue'}/>
                <span>Автор: </span>
                <span className={style.descriptionAuthor}>{author}</span>
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
