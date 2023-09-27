import { View, StyleSheet } from "react-native"
import { Stack } from "expo-router"

import Container from "../../components/ui/Container"
import UserDetails from "../../components/settings/UserDetails"
import DangerZone from "../../components/settings/DangerZone"

const Settings = () => {
    return (<Container>
        <Stack.Screen options={{ title: 'Settings', headerRight: null }} />
        <View style={styles.settings}>
            <UserDetails />
            <DangerZone />
        </View>
    </Container>)
}

const styles = StyleSheet.create({
    settings: {
        height: '100%',
        paddingVertical: '7%',
        paddingHorizontal: '2%'
    }
})

export default Settings