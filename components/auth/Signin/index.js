import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../../../store/auth-slice"

import SigninButton from "./SigninButton"
import Container from "../../ui/Container"
import Form from "../../ui/Form"
import HelperText from "../../ui/HelperText"

const Signin = () => {
    const dispatch = useDispatch()
    const signin = useSelector(state => state.auth.signin)
    const phoneEmailChangeHandler = value => {
        if (isNaN(value)) dispatch(authActions.changeSigninEmail(value))
        else dispatch(authActions.changeSigninPhone(value))
    }
    const passwordChangeHandler = value => {
        dispatch(authActions.changeSigninPassword(value))
    }
    const labels = ['Phone / Email', 'Password']
    const handlers = [phoneEmailChangeHandler, passwordChangeHandler]
    const validity = [signin.isPhoneValid || signin.isEmailValid, signin.isPasswordValid]

    return (<Container>
        <Form
            labels={labels}
            handlers={handlers}
            validity={validity}
        />
        <SigninButton />
        <HelperText label={'Forgot your password?'} dark />
    </Container>)
}

export default Signin