import { useSelector } from "react-redux"
import auth from "@react-native-firebase/auth"

import Button from "../../ui/Button"

const SignupButton = () => {
    const { phone, email, password } = useSelector(state => state.auth.signup)
    const signupHandler = () => {
        auth().createUserWithEmailAndPassword(email, password)
    }
    return (<Button label={'Signup'} onPress={signupHandler} dark />)
}

export default SignupButton