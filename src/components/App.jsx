import React, {Component} from 'react';
import {Container} from "semantic-ui-react";
import axios from 'axios';
import Menu from '../containers/Menu'
import BookCard from "../containers/BookCart";
import Filter from "../containers/Filter";
import {Card, Segment, Loader, Dimmer, Image} from "semantic-ui-react";

class App extends Component {

    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('/books.json').then(({data}) => {
            setBooks(data);
        });
    }

    render() {
        const {books, isReady, setFilter} = this.props;

        return (

            <Container>
                <Menu/>
                <Filter setFilter={setFilter}/>
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

export default App;
