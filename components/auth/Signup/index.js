import { useDispatch, useSelector } from "react-redux"

import SignupButton from "./SignupButton"
import Container from "../../ui/Container"
import Form from "../../ui/Form"
import HelperText from "../../ui/HelperText"

import { authActions } from "../../../store/authSlice"

const Signup = () => {
    const dispatch = useDispatch()
    const signup = useSelector(state => state.auth.signup)
    const generateChangeHandler = (action) => {
        return value => {
            dispatch(action(value))
        }
    }

    const labels = ['Name', 'Email', 'Enrollment No.', 'Phone', 'Password', 'City', 'Stream', 'Course Tenure']
    const actions = [authActions.changeSignupName, authActions.changeSignupEmail, authActions.changeSignupEnrollment, authActions.changeSignupPhone, authActions.changeSignupPassword, authActions.changeSignupCity, authActions.changeSignupStream, authActions.changeSignupTenure]
    const handlers = actions.map(action => generateChangeHandler(action))
    const validity = [signup.isNameValid, signup.isEmailValid, signup.isEnrollmentvalid, signup.isPhoneValid, signup.isPasswordValid, signup.isCityValid, signup.isStreamValid, signup.isTenureValid]

    return (<Container>
        <Form
            labels={labels}
            handlers={handlers}
            validity={validity}
        />
        <SignupButton />
        <HelperText label={'Already have an account?'} dark />
    </Container>)
}

export default Signup