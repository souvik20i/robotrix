import { createSlice } from "@reduxjs/toolkit";

const namePattern = /^[a-zA-Z0-9-]{4,20}\b$/
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const phonePattern = /^\d{10}$/
const passwordPattern = /^[a-zA-Z0-9-]{6,}\b$/
const enrollmentPattern = /^\d{14}$/

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
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
            password: '',
            phone: '',
            enrollment: '',
            course: '',
            stream: '',
            section: '',
            isNameValid: true,
            isEmailValid: true,
            isPasswordValid: true,
            isPhoneValid: true,
            isEnrollmentvalid: true,
            isCourseValid: true,
            isStreamValid: true,
            isSectionValid: true
        }
    },
    reducers: {
        changeToken(state, action) {
            state.token = action.payload
        },
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
            state.signin.email = ''
            state.signin.isEmailValid = false
        },
        changeSigninEmail(state, action) {
            const value = action.payload.trim()
            state.signin.email = value
            state.signin.isEmailValid = value.match(emailPattern)
            state.signin.phone = ''
            state.signin.isPhoneValid = false
        },
        changeSigninPassword(state, action) {
            const value = action.payload.trim()
            state.signin.password = value
            state.signin.isPasswordValid = value.match(passwordPattern)
        },
        changeSignupName(state, action) {
            const value = action.payload.trim()
            state.signup.name = value
            state.signup.isNameValid = value.match(namePattern)
        },
        changeSignupEmail(state, action) {
            const value = action.payload.trim()
            state.signup.email = value
            state.signup.isEmailValid = value.match(emailPattern)
        },
        changeSignupPassword(state, action) {
            const value = action.payload.trim()
            state.signup.password = value
            state.signup.isPasswordValid = value.match(passwordPattern)
        },
        changeSignupPhone(state, action) {
            const value = action.payload.trim()
            state.signup.phone = value
            state.signup.isPhoneValid = value.match(phonePattern)
        },
        changeSignupEnrollment(state, action) {
            const value = action.payload.trim()
            state.signup.enrollment = value
            state.signup.isEnrollmentvalid = value.match(enrollmentPattern)
        },
        changeSignupCourse(state, action) {
            state.signup.course = action.payload
            state.signup.isCourseValid = action.payload != ''
        },
        changeSignupStream(state, action) {
            state.signup.stream = action.payload
            state.signup.isStreamValid = action.payload != ''
        },
        changeSignupSection(state, action) {
            state.signup.section = action.payload
            state.signup.isSectionValid = action.payload != ''
        },
        clearValidations(state) {
            state.signin.isPhoneValid = true
            state.signin.isEmailValid = true
            state.signin.isPasswordValid = true
            state.signup.isNameValid = true
            state.signup.isEmailValid = true
            state.signup.isPasswordValid = true
            state.signup.isEnrollmentvalid = true
            state.signup.isCourseValid = true
            state.signup.isStreamValid = true
            state.signup.isSectionValid = true
        },
        clearSelections(state) {
            state.signup.course = ''
            state.signup.stream = ''
            state.signup.section = ''
        }
    }
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions