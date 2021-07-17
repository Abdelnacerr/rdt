import { combineReducers } from 'redux'
import bankReducer from '../reducers/bankReducer'

const allReducers = combineReducers({
    bankReducer: bankReducer,
})

export default allReducers;
export type State = ReturnType<typeof allReducers>