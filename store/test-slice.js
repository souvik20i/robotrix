import { createSlice } from "@reduxjs/toolkit"

const testSilce = createSlice({
    name: 'test',
    initialState: {
        currentQuestion: 0,
        givenAnswers: {}
    },
    reducers: {
        changeQuestion(state, action) {
            state.currentQuestion = action.payload
        },
        changeAnswers(state, action) {
            state.givenAnswers[state.currentQuestion] = action.payload
        },
        clearCurrentAnswer(state) {
            delete state.givenAnswers[state.currentQuestion]
        },
        clearAnswers(state) {
            state.givenAnswers = {}
        }
    }
})

export const testReducer = testSilce.reducer
export const testActions = testSilce.actions