import { createSlice } from "@reduxjs/toolkit"

const testSilce = createSlice({
    name: 'test',
    initialState: {
        question: {
            serial: 0,
            content: '',
            options: []
        },
        currentOption: ''
    },
    reducers: {
        changeQuestion(state, action) {
            state.question = action.payload
        },
        changeCurrentOption(state, action) {2
            state.currentOption = action.payload
        }
    }
})

export const testReducer = testSilce.reducer
export const testActions = testSilce.actions