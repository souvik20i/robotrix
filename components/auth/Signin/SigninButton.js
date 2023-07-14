import { useState } from "react"
import { useRouter } from "expo-router"
import { useSelector } from "react-redux"
import { getAuth, signInWithEmailAndPassword, signInWithPhoneNumber } from "firebase/auth"

import Button from "../../ui/Button"
import Loader from "../../ui/Loader"

const auth = getAuth()

const SigninButton = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const {
        phone, email, password, isPhoneValid, isEmailValid, isPasswordValid
    } = useSelector(state => state.auth.signin)

    const emailSignin = async () => {
        setIsLoading(true)
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log(res)
        router.replace('/')
        setIsLoading(false)
    }

    // const phoneSignin = async () => {
    //     const res = await signInWithPhoneNumber(auth, phone, password)
    //     console.log(res)
    //     router.replace('/')
    // }

    const catchError = err => console.error(err)
    const signinHandler = () => {
        if (isEmailValid && isPasswordValid) emailSignin().catch(catchError)
        // if (isPhoneValid && isPasswordValid) phoneSignin().catch(catchError)
    }

    return (<>{isLoading ? <Loader /> :
        <Button
            label={'Signin'}
            onPress={signinHandler}
            dark
            small
        />
    }</>)
}

export default SigninButton