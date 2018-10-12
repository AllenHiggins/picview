export const searchReducer = (state = {
    searchText:'abstract',
    amount: 15,
    images: []
}, action) => {
    switch(action.type){
        case 'SEARCH_IMAGES_LIST':
            return{
                ...state,
                images: action.payload
            }
        case 'SEARCH_AMOUNT':
            return {
                ...state,
                amount: action.payload
            }
        case 'SEARCH_INPUT':
            return{
                ...state,
                searchText: action.payload
            }
        case 'SEARCH_SET_IMAGELIST':
            return {
                ...state,
                images: action.payload
            }
        default:
            return state
    }
}