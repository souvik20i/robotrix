import { useRouter } from "expo-router"
import { useSelector } from "react-redux"
import { usePost, catchAsync } from "../../../hooks/use-http"

import Constants from "expo-constants"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Button from "../../ui/Button"
import Loader from "../../ui/Loader"

const SigninButton = () => {
    const router = useRouter()
    const { domain } = Constants.expoConfig.extra
    const { postRequest, isLoading } = usePost()
    const { email, phone, password } = useSelector(state => state.auth.signin)

    const signinHandler = catchAsync(async () => {
        const { token } = await postRequest(`${domain}/auth/login`, {
            emailOrPhone: email || phone, password
        })
        await AsyncStorage.setItem('token', token)
        router.replace('/')
    })

    return (<>{isLoading ? <Loader /> :
        <Button label={'Sign In'} onPress={signinHandler} />
    }</>)
}

export default SigninButton