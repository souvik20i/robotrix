import { useState } from "react"
import { useRouter } from "expo-router"
import { useSelector } from "react-redux"
import { getAuth, createUserWithEmailAndPassword, linkWithPhoneNumber } from "firebase/auth"

import Button from "../../ui/Button"
import Loader from "../../ui/Loader"

const auth = getAuth()

const SignupButton = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const {
        phone, email, password, isNameValid, isEmailValid, isPasswordValid,
        isPhoneValid, isEnrollmentvalid, isCourseValid, isStreamValid, isSectionValid
    } = useSelector(state => state.auth.signup)

    const emailPhoneSignup = async () => {
        setIsLoading(true)
        const res1 = await createUserWithEmailAndPassword(auth, email, password)
        console.log(res1)
        // const res2 = await linkWithPhoneNumber(auth, phone, password)
        // console.log(res2)
        router.replace('/')
        setIsLoading(false)
    }

    const signupHandler = () => {
        const isSignupValid = isNameValid && isEmailValid && isPasswordValid && isPhoneValid
            && isEnrollmentvalid && isCourseValid && isStreamValid && isSectionValid
        if (isSignupValid) {
            emailPhoneSignup().catch(err => console.error(err))
        }
    }

    return (<>{isLoading ? <Loader /> :
        <Button
            label={'Signup'}
            onPress={signupHandler}
            dark
            small
        />
    }</>)
}

export default SignupButton