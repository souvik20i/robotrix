import { createSlice } from "@reduxjs/toolkit"

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: {
        isShown: false,
        message: null,
        status: null
    },
    reducers: {
        sendFeedback(state, action) {
            const { message, status } = action.payload
            state.isShown = true
            state.message = message
            state.status = status
        },
        dismissFeedback(state) {
            state.isShown = false
            state.message = null
            state.status = null
        }
    }
})

export const feedbackReducer = feedbackSlice.reducer
export const feedbackActions = feedbackSlice.actions