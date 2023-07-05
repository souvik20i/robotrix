import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        isSigninActive: true
    },
    reducers: {
        turnToSignin(state) {
            state.isSigninActive = true
        },
        turnToSignup(state) {
            state.isSigninActive = false
        }
    }
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions