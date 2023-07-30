import { createSlice } from "@reduxjs/toolkit"

const moduleSlice = createSlice({
    name: 'module',
    initialState: {
        currentModule: '',
        topics: [],
        currentTopic: ''
    },
    reducers: {
        changeCurrentModule(state, action) {
            state.currentModule = action.payload
        },
        changeModule(state, action) {
            state.topics = action.payload
        },
        changeCurrentTopic(state, action) {
            state.currentTopic = action.payload
        }
    }
})

export const moduleReducer = moduleSlice.reducer
export const moduleActions = moduleSlice.actions