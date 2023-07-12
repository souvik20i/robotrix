import { useRouter } from "expo-router"
import { useSelector } from "react-redux"
import { getAuth, createUserWithEmailAndPassword, linkWithPhoneNumber } from "firebase/auth"

import Button from "../../ui/Button"

const auth = getAuth()

const SignupButton = () => {
    const router = useRouter()
    const {
        phone, email, password, isNameValid, isEmailValid, isPasswordValid,
        isPhoneValid, isEnrollmentvalid, isCourseValid, isStreamValid, isSectionValid
    } = useSelector(state => state.auth.signup)

    const emailPhoneSignup = async () => {
        const res1 = await createUserWithEmailAndPassword(auth, email, password)
        console.log(res1)
        // const res2 = await linkWithPhoneNumber(auth, phone, password)
        // console.log(res2)
        router.replace('/')
    }

    const signupHandler = () => {
        const isSignupValid = isNameValid && isEmailValid && isPasswordValid && isPhoneValid
            && isEnrollmentvalid && isCourseValid && isStreamValid && isSectionValid
        if (isSignupValid) {
            emailPhoneSignup().catch(err => console.error(err))
        }
    }

    return (<Button
        label={'Signup'}
        onPress={signupHandler}
        dark
        small
    />)
}

export default SignupButton