import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setBooks} from './actions/books';
import axios from 'axios';
import MenuComponent from './components/Menu'

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

        <div>
         <MenuComponent />
         <ul>
             {!isReady ? 'Завантаження...' : books.map( book => (
                     <li>
                          <b>{book.title}</b> - {book.author}
                     </li>
                ))}
         </ul>
        </div>

        );
    }
   
}

const mapStateToProps = ({ books }) => ({
    books: books.items,
    isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
