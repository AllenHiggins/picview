import {combineReducers} from 'redux'

import {imageResultsReducer} from './imageResults-reducer'
import {searchReducer} from './search-reducer'

export const reducers = combineReducers({
    imageResultsReducer,
    searchReducer
})