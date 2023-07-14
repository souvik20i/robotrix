import { Stack } from "expo-router"
import { Provider } from "react-redux"

import store from "../store"
import colors from "../public/colors"
import "../firebase/config"

const Layout = () => {
    return (<Provider store={store}>
        <Stack screenOptions={{
            headerStyle: { backgroundColor: colors.bgSecondary },
            headerTintColor: colors.textLight,
            statusBarTranslucent: true
        }} />
    </Provider>)
}

export default Layout