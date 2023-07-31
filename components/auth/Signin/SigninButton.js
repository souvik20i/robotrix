import { useRouter } from "expo-router"
import { useSelector } from "react-redux"
import { usePost, catchAsync } from "../../../hooks/use-http"

import AsyncStorage from "@react-native-async-storage/async-storage"
import Button from "../../ui/Button"
import Loader from "../../ui/Loader"

const SigninButton = () => {
    const router = useRouter()
    const { postRequest, isLoading } = usePost()
    const { email, phone, password } = useSelector(state => state.auth.signin)

    const signinHandler = catchAsync(async () => {
        const data = await postRequest('http://192.168.90.8:3000/auth/login', {
            emailOrPhone: email | phone, password
        })
        await AsyncStorage.setItem('token', data.token)
        router.replace('/')
    })

    return (<>{isLoading ? <Loader /> :
        <Button label={'Signin'} onPress={signinHandler} dark small />
    }</>)
}

export default SigninButton