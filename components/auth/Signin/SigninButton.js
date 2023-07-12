import { useSelector } from "react-redux"
import { useRouter } from "expo-router"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

import Button from "../../ui/Button"

const auth = getAuth()

const SigninButton = () => {
    const { phone, email, password } = useSelector(state => state.auth.signin)
    const router = useRouter()
    const emailSignin = async () => {
        await signInWithEmailAndPassword(auth, email, password)
        router.replace('/')
    }
    const signinHandler = () => {
        emailSignin().catch(err => console.error(err))
    }
    return (<Button
        label={'Signin'}
        onPress={signinHandler}
        dark
        small
    />)
}

export default SigninButton