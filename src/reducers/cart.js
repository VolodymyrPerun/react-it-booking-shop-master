const initialState = {
    items: []

};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {

                items:
                    [...state.items,
                        action.payload
                    ]
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                items: state.items.filter(el => el.id !== action.payload)
            };
        default:
            return state;
    }
};
