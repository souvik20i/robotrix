import { TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "../../../colors"

const SettingsButton = () => {
    const router = useRouter()
    const goToSettingsHandler = () => router.push('/settings')

    return (<TouchableOpacity onPress={goToSettingsHandler}>
        <Ionicons name="settings-sharp" size={24} color={colors.bgPrimary} />
    </TouchableOpacity>)
}

export default SettingsButton