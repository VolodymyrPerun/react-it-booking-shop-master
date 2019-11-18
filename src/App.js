import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setBooks} from './actions/books';
import axios from 'axios';

class App extends Component {

    componentWillMount() {
        const { setBooks } = this.props;
        axios.get('/books.json').then(({ data }) => {
          setBooks(data);
        });
      }

    render() {
        const { books, isReady } = this.props;

        return (

         <ul>
             {!isReady ? 'Завантаження...' : books.map( book => (
                     <li>
                          <b>{book.title}</b> - {book.author}
                     </li>
                ))}
         </ul>

        );
    }
   
}

const mapStateToProps = ({ books }) => ({
    books: books.items
});

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
