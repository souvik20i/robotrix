import { useRouter } from "expo-router"
import { useSelector } from "react-redux"

import useHttp from "../../../hooks/use-http"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Button from "../../ui/Button"
import Loader from "../../ui/Loader"

const SignupButton = () => {
    const router = useRouter()
    const { httpRequest, isLoading, error } = useHttp()
    const {
        name, email, password, phone, enrollment, course, stream, section, isNameValid, isEmailValid,
        isPasswordValid, isPhoneValid, isEnrollmentvalid, isCourseValid, isStreamValid, isSectionValid
    } = useSelector(state => state.auth.signup)

    const signupHandler = async () => {
        const isSignupValid = isNameValid && isEmailValid && isPasswordValid && isPhoneValid && isEnrollmentvalid && isCourseValid && isStreamValid && isSectionValid
        if (!isSignupValid) return
        const res = httpRequest('http://192.168.56.1:3000/auth/register', {
            name, email, password, phone, enrollmentno: enrollment, course, stream, section
        })
        console.log(res)
        await AsyncStorage.setItem('username', email)
        await AsyncStorage.setItem('password', password)
        router.replace('/')
    }

    return (<>{isLoading ? <Loader /> :
        <Button label={'Signup'} onPress={signupHandler} dark small />
    }</>)
}

export default SignupButton