import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setBooks} from './actions/books';

class App extends Component {
    render() {
        const { books } = this.props.books;
        const { setBooks } = this.props;
        const newBooks = [
            {
                id: 0,
                name: 'Ефективний Spark. Масштабування і оптимізація' +
                    ((new Date().getUTCDate().toString())
                        + '/' + (new Date().getUTCMonth().toString())
                        + '/' + (new Date().getUTCFullYear().toString())
                        + ', ' + (new Date().getUTCHours().toString())
                        + ':' + (new Date().getUTCMinutes().toString())
                        + ':' + (new Date().getUTCSeconds().toString())),
                title: 'Карау Х., Уоррен Р.',
                year: 2018
            }
        ];

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
