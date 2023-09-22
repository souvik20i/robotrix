import { useRouter } from "expo-router"
import { useSelector } from "react-redux"
import { usePost, catchAsync } from "../../../hooks/use-http"

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
        const { token } = await postRequest('/auth/register', {
            name, email, password, phone, enrollmentno: enrollment, course, stream, section
        })
        await AsyncStorage.setItem('token', token)
        router.back()
        router.replace('/')
    })

    return (<>{isLoading ? <Loader /> :
        <Button label={'Sign Up'} onPress={signupHandler} />
    }</>)
}

export default SignupButton