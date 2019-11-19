const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                
                items:
                 [...state.items,
                    action.payload
                ]
            };
        case "REMOVE_BOOK":
            return {
                ...state,
                items: state.items.filter( el => el.id !== action.payload)
            };
        default:
            return state;
    }
};
