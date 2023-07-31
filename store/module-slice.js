import { createSlice } from "@reduxjs/toolkit"

const moduleSlice = createSlice({
    name: 'module',
    initialState: {
        modules: [],
        currentModule: 0,
        currentTopic: 0
    },
    reducers: {
        changeModules(state, action) {
            state.modules = action.payload
        },
        changeCurrentModule(state, action) {
            state.currentModule = action.payload
        },
        changeCurrentTopic(state, action) {
            state.currentTopic = action.payload
        }
    }
})

export const moduleReducer = moduleSlice.reducer
export const moduleActions = moduleSlice.actions