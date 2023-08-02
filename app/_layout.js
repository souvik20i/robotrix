import { Stack } from "expo-router"
import { Provider } from "react-redux"

import Feedback from "../components/ui/Feedback"
import store from "../store"
import colors from "../public/colors"

const Layout = () => {
    return (<Provider store={store}>
        <Stack screenOptions={{
            headerStyle: { backgroundColor: colors.bgSecondary },
            headerTintColor: colors.textLight,
            statusBarTranslucent: true
        }} />
        <Feedback />
    </Provider>)
}

export default Layout