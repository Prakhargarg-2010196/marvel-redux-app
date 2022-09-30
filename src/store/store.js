import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

// function of redux-toolkit used to configure the store with reducers 
//  Here we have taken only a single root reducer that has a combined collection of all the reducer/slices 
/*
  By default, configureStore from Redux Toolkit will:
  - Call applyMiddleware with a default list of middleware, including redux-thunk, and some development-only - middleware that catch common mistakes like mutating state
  - Call composeWithDevTools to set up the Redux DevTools Extension
 */
export default configureStore({
  reducer: rootReducer,
})