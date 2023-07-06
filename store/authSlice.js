import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        isSigninActive: true,
        signin: {
            phone: '',
            email: '',
            password: ''
        },
        signup: {
            name: '',
            email: '',
            enrollment: '',
            phone: '',
            city: '',
            stream: '',
            tenure: ''
        }
    },
    reducers: {
        turnToSignin(state) {
            state.isSigninActive = true
        },
        turnToSignup(state) {
            state.isSigninActive = false
        },
        changeSigninPhone(state,action){},
        changeSigninEmail(state,action){},
        changeSigninPassword(state,action){},

    }
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions