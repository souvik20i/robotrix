import { createSlice } from "@reduxjs/toolkit"

const testSilce = createSlice({
    name: 'test',
    initialState: {
        question: {
            serial: 0,
            content: '',
            options: []
        },
        answers: {}
    },
    reducers: {
        changeQuestion(state, action) {
            state.question = action.payload
        },
        changeAnswers(state, action) {
            const { serial, option } = action.payload
            state.answers[serial] = option
        },
        clearCurrentAnswer(state) {
            delete state.answers[state.question.serial]
        },
        clearAnswers(state) {
            state.answers = {}
        }
    }
})

export const testReducer = testSilce.reducer
export const testActions = testSilce.actions