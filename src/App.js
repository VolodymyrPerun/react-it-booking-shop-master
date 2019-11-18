import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setBooks} from './actions/books';

class App extends Component {
    render() {
        const { books } = this.props.books;
        const { setBooks } = this.props;
       

        return (

            <div className="container">
                <div>
                    <h1>{books[0].name}</h1>
                    <button onClick={setBooks.bind(this, newBooks)}>Add Book</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
