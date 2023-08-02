import { useRouter } from "expo-router"
import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../../../store/auth-slice"
import { usePost, catchAsync } from "../../../hooks/use-http"
import { DOMAIN } from "../../../domain"

import AsyncStorage from "@react-native-async-storage/async-storage"
import Button from "../../ui/Button"
import Loader from "../../ui/Loader"

const SigninButton = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { postRequest, isLoading } = usePost()
    const { email, phone, password } = useSelector(state => state.auth.signin)

    const signinHandler = catchAsync(async () => {
        const { token } = await postRequest(`${DOMAIN}/auth/login`, {
            emailOrPhone: email | phone, password
        })
        console.log(token)
        await AsyncStorage.setItem('token', token)
        dispatch(authActions.changeToken(token))
        router.replace('/')
    })

    return (<>{isLoading ? <Loader /> :
        <Button label={'Signin'} onPress={signinHandler} dark small />
    }</>)
}

export default SigninButton