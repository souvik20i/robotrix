import { createSlice } from "@reduxjs/toolkit"

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: {
        isShown: false,
        message: null,
        success: null,
        isDeletionModal: false
    },
    reducers: {
        sendFeedback(state, action) {
            const { message, success, isDeletionModal } = action.payload
            state.isShown = true
            state.message = message
            state.success = success
            state.isDeletionModal = isDeletionModal
        },
        dismissFeedback(state) {
            state.isShown = false
            state.message = null
            state.success = null
            state.isDeletionModal = false
        }
    }
})

export const feedbackReducer = feedbackSlice.reducer
export const feedbackActions = feedbackSlice.actions