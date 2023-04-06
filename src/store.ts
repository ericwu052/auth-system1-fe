import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reduxslice/counterSlice'
import authSystemReducer from './reduxslice/authsystemSlice'

const store = configureStore({
    reducer: {
	counter: counterReducer,
	authSystem: authSystemReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
