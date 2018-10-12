export const imageResultsReducer = (state={
    open: false,
    currentImage: ''
}, action) => {
    switch(action.type){
        case 'IMAGERESULT_OPEN_DIALOG':
            return {
                ...state,
                open: action.payload
            }
        case 'IMAGERESULT_CURRENTIMAGE':
            return {
                ...state,
                currentImage: action.payload
            }
        default:
            return state
    }
}