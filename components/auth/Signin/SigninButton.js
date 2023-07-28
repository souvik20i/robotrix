import { useRouter } from "expo-router"
import { useSelector } from "react-redux"

import useHttp from "../../../hooks/use-http"
import Button from "../../ui/Button"
import Loader from "../../ui/Loader"

const SigninButton = () => {
    const router = useRouter()
    const { httpRequest, isLoading, error } = useHttp()
    const {
        phone, email, password, isPhoneValid, isEmailValid, isPasswordValid
    } = useSelector(state => state.auth.signin)

    const signinHandler = () => {
        const isSiginValid = (isEmailValid || isPhoneValid) && isPasswordValid
        if (!isSiginValid) return
        const res = httpRequest('http://192.168.56.1:3000/auth/login', {
            emailOrPhone: email | phone, password
        })
        console.log(res)
        router.replace('/')
    }

    return (<>{isLoading ? <Loader /> :
        <Button label={'Signin'} onPress={signinHandler} dark small />
    }</>)
}

export default SigninButton