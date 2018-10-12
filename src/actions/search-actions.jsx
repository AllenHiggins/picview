import axios from 'axios'

export const searchGetImagesList = (userInput, amount) => {
    return(dispatch) => {
        
        const apiUrl = 'https://pixabay.com/api'
        const apiKey = '10361802-d80edd7c8013de8fa58524476'

        axios.get(`${apiUrl}/?key=${apiKey}&q=${userInput}&image_type=photo&per_page=${amount}&safesearch=true`)
        .then( res => {
            dispatch({
                type: 'SEARCH_IMAGES_LIST',
                payload:res.data.hits
            })
        })
        .catch( err => console.log(err))

    }
}

export const searchSetImagesList = (val) => {
    return {
        type: 'SEARCH_SET_IMAGELIST',
        payload: val
    }
}

export const searchAmount = (selectedAmount) => {
    return{
        type:'SEARCH_AMOUNT',
        payload: selectedAmount
    }
}

export const searchUpdateUserInput = (userInput) => {
    return{
        type:'SEARCH_INPUT',
        payload: userInput 
    }
}