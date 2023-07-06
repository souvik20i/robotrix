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
            password: '',
            city: '',
            stream: '',
            tenure: ''
        }
    },
    reducers: {
        turnToSignin(state) { state.isSigninActive = true },
        turnToSignup(state) { state.isSigninActive = false },
        changeSigninPhone(state, action) { state.signin.phone = action.payload },
        changeSigninEmail(state, action) { state.signin.email = action.payload },
        changeSigninPassword(state, action) { state.signin.password = action.payload },
        changeSignupName(state, action) { state.signup.name = action.payload },
        changeSignupEmail(state, action) { state.signup.email = action.payload },
        changeSignupEnrollment(state, action) { state.signup.enrollment = action.payload },
        changeSignupPhone(state, action) { state.signup.phone = action.payload },
        changeSignupPassword(state, action) { state.signup.password = action.payload },
        changeSignupCity(state, action) { state.signup.city = action.payload },
        changeSignupStream(state, action) { state.signup.stream = action.payload },
        changeSignupTenure(state, action) { state.signup.tenure = action.payload },
    }
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions