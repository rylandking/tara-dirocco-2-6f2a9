export default (state, action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
                // category: state.id
            }
        default:
            return state;
    }
}