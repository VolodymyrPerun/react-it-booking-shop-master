import {connect} from 'react-redux';
import {setBooks} from '../actions/books';
import App from '../components/App';

const mapStateToProps = ({books}) => ({
    books: books.items,
    isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
