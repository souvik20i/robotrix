import { useRouter } from "expo-router"
import { useSelector, useDispatch } from "react-redux"
import { authActions } from "../../../store/auth-slice"
import { usePost, catchAsync } from "../../../hooks/use-http"
import { DOMAIN } from "../../../domain"

import AsyncStorage from "@react-native-async-storage/async-storage"
import Button from "../../ui/Button"
import Loader from "../../ui/Loader"

const SignupButton = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { postRequest, isLoading } = usePost()
    const {
        name, email, password, phone, enrollment, course, stream, section
    } = useSelector(state => state.auth.signup)

    const signupHandler = catchAsync(async () => {
        const { token } = await postRequest(`${DOMAIN}/auth/register`, {
            name, email, password, phone, enrollmentno: enrollment, course, stream, section
        })
        await AsyncStorage.setItem('token', token)
        dispatch(authActions.changeToken(token))
        router.replace('/')
    })

    return (<>{isLoading ? <Loader /> :
        <Button label={'Signup'} onPress={signupHandler} dark small />
    }</>)
}

export default SignupButton