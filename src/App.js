import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setBooks} from './actions/books';
import {Container} from "semantic-ui-react";
import axios from 'axios';
import MenuComponent from './components/Menu'
import BookCard from "./components/BookCard";
import {Card, Segment, Loader, Dimmer, Image} from "semantic-ui-react";

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
                    {!isReady ?
                        <Segment>
                            <Dimmer active>
                                <Loader size='large'>Завантаження...</Loader>
                            </Dimmer>
                            <Image
                                src='https://github.com/VolodymyrPerun/react-it-booking-shop-master/blob/master/assets/loading.gif?raw=true'/>
                        </Segment>
                        : books.map((book, i) => (
                            <BookCard key={i} {...book}/>
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
