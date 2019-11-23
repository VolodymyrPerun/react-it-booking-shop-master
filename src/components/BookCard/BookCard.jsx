import React from 'react';
import {Button, Card, Icon, Image} from "semantic-ui-react";
import style from './BookCard.module.scss'

const BookCard = book => {
    const {title, author, price, image, year, rating, addToCart, addedCount} = book;
    return (
        <Card color={'red'} href={'#'} className={style.Card}>
            <Image src={image} fluid={true} className={style.CardImg}/>
            <Card.Content textAlign={'center'}>
                <Card.Header className={style.ItemName}>
                    <Icon name={'book'} color={'olive'}/>
                    <span><i>Назва книги: </i></span>{title}
                </Card.Header>
                <Card.Meta>
                    <Icon name={'calendar alternate outline'} color={'green'}/>
                    <span className={style.dataTitle}>Рік публікації: </span>
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
                <a className={style.price}>
                    <Icon name='money bill alternate outline' color={'blue'}/>
                    Ціна: <span> {price}</span> грн.
                </a>
            </Card.Content>
            <Card.Content extra textAlign={'center'}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={style.ratingTitle}>
                    <Icon name='star' color={'yellow'}/>
                    Рейтинг:<span> {rating} </span> / 5
                </a>
            </Card.Content>
            <Button onClick={addToCart.bind(this, book)} animated={'fade'} color={'olive'}>
                <Icon name={'plus cart'}/>
                Добавити в корзину {addedCount > 0 && `(${addedCount})`}
            </Button>
        </Card>
    );
};

export default BookCard;
