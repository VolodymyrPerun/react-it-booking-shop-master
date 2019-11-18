import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setBooks} from './actions/books';
import {Container} from "semantic-ui-react";
import axios from 'axios';
import MenuComponent from './components/Menu'
import BookCard from "./components/BookCard";
import {Card} from "semantic-ui-react";

class App extends Component {

    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('/books.json').then(({data}) => {
            setBooks(data);
        });
    }

    render() {
        const {books, isReady} = this.props;

        return (

            <Container>
                <MenuComponent/>
                <Card.Group itemsPerRow={4} stackable={true}
                            doubling={true} centered={true} textAlign={'center'}>
                    {!isReady ? 'Завантаження...' : books.map(book => (
                            <BookCard {...book}/>

                    ))}
                </Card.Group>
            </Container>

        );
    }

}

const mapStateToProps = ({books}) => ({
    books: books.items,
    isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
