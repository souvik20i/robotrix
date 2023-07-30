import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./auth-slice"
import { moduleReducer } from "./module-slice"
import { testReducer } from "./test-slice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        module: moduleReducer,
        test: testReducer
    }
})

export default store