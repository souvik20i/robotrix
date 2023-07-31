import { useRouter } from "expo-router"
import { useSelector } from "react-redux"
import { usePost, catchAsync } from "../../../hooks/use-http"
import { DOMAIN } from "../../../domain"

import AsyncStorage from "@react-native-async-storage/async-storage"
import Button from "../../ui/Button"
import Loader from "../../ui/Loader"

const SignupButton = () => {
    const router = useRouter()
    const { postRequest, isLoading } = usePost()
    const {
        name, email, password, phone, enrollment, course, stream, section
    } = useSelector(state => state.auth.signup)

    const signupHandler = catchAsync(async () => {
        const data = await postRequest(`${DOMAIN}/auth/register`, {
            name, email, password, phone, enrollmentno: enrollment, course, stream, section
        })
        await AsyncStorage.setItem('token', data.token)
        router.replace('/')
    })

    return (<>{isLoading ? <Loader /> :
        <Button label={'Signup'} onPress={signupHandler} dark small />
    }</>)
}

export default SignupButton