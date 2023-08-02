import { createSlice } from "@reduxjs/toolkit"

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: {
        isShown: false,
        message: ''
    },
    reducers: {
        sendFeedback(state, action) {
            state.message = action.payload
            state.isShown = true
        },
        dismissFeedback(state) {
            state.isShown = false
        }
    }
})

export const feedbackReducer = feedbackSlice.reducer
export const feedbackActions = feedbackSlice.actions