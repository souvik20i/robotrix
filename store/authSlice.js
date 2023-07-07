import { createSlice } from "@reduxjs/toolkit";

const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const phonePattern = /^\d{10}$/

const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        isSigninActive: true,
        signin: {
            phone: '',
            email: '',
            password: '',
            isPhoneValid: true,
            isEmailValid: true,
            isPasswordValid: true
        },
        signup: {
            name: '',
            email: '',
            enrollment: '',
            phone: '',
            password: '',
            city: '',
            stream: '',
            tenure: '',
            isNameValid: true,
            isEmailValid: true,
            isEnrollmentvalid: true,
            isPhoneValid: true,
            isPasswordValid: true,
            isCityValid: true,
            isStreamValid: true,
            isTenureValid: true
        }
    },
    reducers: {
        turnToSignin(state) {
            state.isSigninActive = true
        },
        turnToSignup(state) {
            state.isSigninActive = false
        },
        changeSigninPhone(state, action) {
            const value = action.payload.trim()
            state.signin.phone = value
            state.signin.isPhoneValid = value.match(phonePattern)
        },
        changeSigninEmail(state, action) {
            const value = action.payload.trim()
            state.signin.email = value
            state.signin.isEmailValid = value.match(emailPattern)
        },
        changeSigninPassword(state, action) {
            const value = action.payload.trim()
            state.signin.password = value
        },
        changeSignupName(state, action) {
            const value = action.payload.trim()
            state.signup.name = value
        },
        changeSignupEmail(state, action) {
            const value = action.payload.trim()
            state.signup.email = value
            state.signup.isEmailValid = value.match(emailPattern)
        },
        changeSignupEnrollment(state, action) {
            const value = action.payload.trim()
            state.signup.enrollment = value
        },
        changeSignupPhone(state, action) {
            const value = action.payload.trim()
            state.signup.phone = value
            state.signup.isPhoneValid = value.match(phonePattern)
        },
        changeSignupPassword(state, action) {
            const value = action.payload.trim()
            state.signup.password = value
        },
        changeSignupCity(state, action) {
            const value = action.payload.trim()
            state.signup.city = value
        },
        changeSignupStream(state, action) {
            const value = action.payload.trim()
            state.signup.stream = value
        },
        changeSignupTenure(state, action) {
            const value = action.payload.trim()
            state.signup.tenure = value
        }
    }
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions