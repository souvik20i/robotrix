import AsyncStorage from "@react-native-async-storage/async-storage"

const useAuth = async () => {
    const username = await AsyncStorage.getItem('username')
    return username
}

export default useAuth