import { Stack } from "expo-router"
import { Provider } from "react-redux"
import { colors } from "../colors"

import SettingsButton from "../components/settings/SettingsButton"
import Feedback from "../components/ui/Feedback"
import store from "../store"

const Layout = () => {
    return (<Provider store={store}>
        <Stack screenOptions={{
            headerStyle: { backgroundColor: colors.bgSecondary },
            headerRight: () => <SettingsButton />,
            headerTintColor: colors.textLight,
            statusBarTranslucent: true
        }} />
        <Feedback />
    </Provider>)
}

export default Layout