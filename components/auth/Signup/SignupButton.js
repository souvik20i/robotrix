import { useRouter } from "expo-router"
import { useSelector } from "react-redux"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

import Button from "../../ui/Button"

const auth = getAuth()

const SignupButton = () => {
    const { phone, email, password } = useSelector(state => state.auth.signup)
    const router = useRouter()
    const emailSignup = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
        router.replace('/')
    }
    const signupHandler = () => {
        emailSignup().catch(err => console.error(err))
    }
    return (<Button label={'Signup'} onPress={signupHandler} dark />)
}

export default SignupButton