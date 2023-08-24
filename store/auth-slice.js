import { createSlice } from "@reduxjs/toolkit"
import { validation, error } from "../validation"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        isSigninActive: true,
        signin: {
            email: null,
            password: null,
            phone: null,
            emailError: null,
            passwordError: null,
            phoneError: null
        },
        signup: {
            name: null,
            email: null,
            password: null,
            phone: null,
            enrollment: null,
            course: null,
            stream: null,
            section: null,
            nameError: null,
            emailError: null,
            passwordError: null,
            phoneError: null,
            enrollmentError: null,
            courseError: null,
            streamError: null,
            sectionError: null
        }
    },
    reducers: {
        changeToken(state, action) {
            state.token = action.payload
        },
        clearToken(state) {
            state.token = null
        },
        turnToSignin(state) {
            state.isSigninActive = true
        },
        turnToSignup(state) {
            state.isSigninActive = false
        },
        changeSigninEmail(state, action) {
            const value = action.payload.trim()
            state.signin.email = value
            state.signin.emailError = value.match(validation.email) ? null : error.email
            state.signin.phone = null
            state.signin.isPhoneValid = false
        },
        changeSigninPassword(state, action) {
            const value = action.payload.trim()
            state.signin.password = value
            state.signin.passwordError = value.match(validation.password) ? null : error.password
        },
        changeSigninPhone(state, action) {
            const value = action.payload.trim()
            state.signin.phone = value
            state.signin.phoneError = value.match(validation.phone) ? null : error.phone
            state.signin.email = null
            state.signin.isEmailValid = false
        },
        changeSignupName(state, action) {
            const value = action.payload.trim()
            state.signup.name = value
            state.signup.nameError = value.match(validation.name) ? null : error.name
        },
        changeSignupEmail(state, action) {
            const value = action.payload.trim()
            state.signup.email = value
            state.signup.emailError = value.match(validation.email) ? null : error.email
        },
        changeSignupPassword(state, action) {
            const value = action.payload.trim()
            state.signup.password = value
            state.signup.passwordError = value.match(validation.password) ? null : error.password
        },
        changeSignupPhone(state, action) {
            const value = action.payload.trim()
            state.signup.phone = value
            state.signup.phoneError = value.match(validation.phone) ? null : error.phone
        },
        changeSignupEnrollment(state, action) {
            const value = action.payload.trim()
            state.signup.enrollment = value
            state.signup.enrollmentError = value.match(validation.enrollment) ? null : error.enrollment
        },
        changeSignupCourse(state, action) {
            state.signup.course = action.payload
            state.signup.courseError = action.payload != '' ? null : error.course
        },
        changeSignupStream(state, action) {
            state.signup.stream = action.payload
            state.signup.isStreamValid = action.payload != '' ? null : error.stream
        },
        changeSignupSection(state, action) {
            state.signup.section = action.payload
            state.signup.isSectionValid = action.payload != '' ? null : error.section
        },
        clearValidations(state) {
            state.signin.phoneError = null
            state.signin.emailError = null
            state.signin.passwordError = null
            state.signup.nameError = null
            state.signup.emailError = null
            state.signup.passwordError = null
            state.signup.enrollmentError = null
            state.signup.courseError = null
            state.signup.streamError = null
            state.signup.sectionError = null
        },
        clearSelections(state) {
            state.signup.course = null
            state.signup.stream = null
            state.signup.section = null
        }
    }
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions