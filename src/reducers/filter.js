const initialState = {
    searchQuery: '',
    filterBy: 'all'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_SEARH_QUERY":
            return {
                ...state,
                searchQuery: action.payload
            };
        case "SET_FILTER":
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
};
