import { createSlice } from "@reduxjs/toolkit"

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: {
        isShown: false,
        message: null,
        success: null
    },
    reducers: {
        sendFeedback(state, action) {
            const { message, success } = action.payload
            state.isShown = true
            state.message = message
            state.success = success
        },
        dismissFeedback(state) {
            state.isShown = false
            state.message = null
            state.success = null
        }
    }
})

export const feedbackReducer = feedbackSlice.reducer
export const feedbackActions = feedbackSlice.actions