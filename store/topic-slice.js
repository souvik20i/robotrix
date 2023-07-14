import { createSlice } from "@reduxjs/toolkit"

const topicSlice = createSlice({
    name: 'topic',
    initialState: {
        isNotesActive: true,
        isResourcesActive: false,
        isAssessmentActive: false
    },
    reducers: {
        activateNotes(state) {
            state.isNotesActive = true
            state.isResourcesActive = false
            state.isAssessmentActive = false
        },
        activateResources(state) {
            state.isResourcesActive = true
            state.isAssessmentActive = false
            state.isNotesActive = false
        },
        activateAssessment(state) {
            state.isAssessmentActive = true
            state.isResourcesActive = false
            state.isNotesActive = false
        }
    }
})

export const topicReducer = topicSlice.reducer
export const topicActions = topicSlice.actions