export const setFilter = filter => ({
    type: 'SET_FILTER',
    payload: filter
});

export const setQuery = searchQuery => ({
    type: 'SET_SEARH_QUERY',
    payload: searchQuery
});