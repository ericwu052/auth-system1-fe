import { createSlice } from '@reduxjs/toolkit'

interface AuthSystemState {
    accessToken: string
}

const initialState: AuthSystemState = {
    accessToken: ''
}

export const authSystemSlice = createSlice({
    name: 'authSystem',
    initialState,
    reducers: {
	setAccessToken: (state, action: PayloadAction<string>) => {
	    state.accessToken = action.payload
	}
    }
})

export const { setAccessToken } = authSystemSlice.actions

export default authSystemSlice.reducer
