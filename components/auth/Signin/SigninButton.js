import { useSelector } from "react-redux"
import { useRouter } from "expo-router"
import { getAuth, signInWithEmailAndPassword, signInWithPhoneNumber } from "firebase/auth"

import Button from "../../ui/Button"

const auth = getAuth()

const SigninButton = () => {
    const router = useRouter()
    const {
        phone, email, password, isPhoneValid, isEmailValid, isPasswordValid
    } = useSelector(state => state.auth.signin)

    const emailSignin = async () => {
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log(res)
        router.replace('/')
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

    return (<Button
        label={'Signin'}
        onPress={signinHandler}
        dark
        small
    />)
}

export default SigninButton