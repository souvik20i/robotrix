import { useSelector } from "react-redux"
import auth from "@react-native-firebase/auth"

import Button from "../../ui/Button"

const SigninButton = () => {
    const { phone, email, password } = useSelector(state => state.auth.signin)
    const signinHandler = () => {
        auth().signInWithEmailAndPassword(email, password)
    }
    return (<Button label={'Signin'} onPress={signinHandler} dark />)
}

export default SigninButton