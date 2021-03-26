const usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USERS':
            return [...state, ...action.payload];
        default:
            return state
    }
};
export default usersReducer;
