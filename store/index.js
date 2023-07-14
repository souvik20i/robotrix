import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./auth-slice"
import { testReducer } from "./test-slice"
import { topicReducer } from "./topic-slice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        test: testReducer,
        topic: topicReducer
    }
})

export default store