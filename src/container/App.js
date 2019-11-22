import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as booksActions from '../actions/books';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (books, filterBy) => {
    switch (filterBy) {
        // case 'all':
        //     return books;
        case 'rating':
            return orderBy(books, 'rating', 'desc');
        case 'price_high':
            return orderBy(books, 'price', 'desc');
        case 'price_low':
            return orderBy(books, 'price', 'asc');
        case 'author':
            return orderBy(books, 'author', 'asc');
        case 'year':
            return orderBy(books, "year", 'desc');
        default:
            return books;
    }
};

const filterBooks = (books, searchQuery) =>
    books.filter(
        o =>
            o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.year.toString().indexOf(searchQuery.toString()) >= 0,
    );

const searchBooks = (books, filterBy, searchQuery) => {
    return sortBy(filterBooks(books, searchQuery), filterBy);
};

const mapStateToProps = ({books, filter}) => ({
    books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery),
    isReady: books.isReady,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps,)(App);
