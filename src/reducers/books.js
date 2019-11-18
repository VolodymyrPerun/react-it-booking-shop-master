const initialState = {
    isReady: false,
    books: null
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,
                books: [
                    action.payload]
            };
        case 'SET_IS_READY':
            return {
                ...state,
                isReady: action.payload
            }
        default:
            return state
    }
}
