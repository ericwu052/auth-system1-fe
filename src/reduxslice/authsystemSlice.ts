import { createSlice } from '@reduxjs/toolkit'

interface AuthSystemState {
    accessToken: string,
    email: string
}

const initialState: AuthSystemState = {
    accessToken: '',
    email: ''
}

export const authSystemSlice = createSlice({
    name: 'authSystem',
    initialState,
    reducers: {
	setAccessToken: (state, action: PayloadAction<string>) => {
	    state.accessToken = action.payload
	},
	setEmailAction: (state, action: PayloadAction<string>) => {
	    state.email = action.payload
	}
    }
})

export const { setAccessToken, setEmailAction } = authSystemSlice.actions

export default authSystemSlice.reducer
