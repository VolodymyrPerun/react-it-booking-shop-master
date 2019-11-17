const initialState = {
    isReady: false,
    books: [
        {
            id: 0,
            name: 'Python для чайників',
            title: 'Мюллер Дж.П.',
            year: 2019
        }
    ]
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,
                books: [
                    action.payload]
            };
        case 'ADD_BOOKS':
            return {
                ...state,
                books: [
                    ...state.books,
                    action.payload]
            };
        default:
            return state
    }
}
