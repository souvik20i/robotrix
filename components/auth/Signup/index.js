import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../../../store/auth-slice"

import SignupButton from "./SignupButton"
import Container from "../../ui/Container"
import Form from "../../ui/Form"
import HelperText from "../../ui/HelperText"

const Signup = () => {
    const dispatch = useDispatch()
    const signup = useSelector(state => state.auth.signup)
    const generateChangeHandler = (action) => {
        return value => {
            dispatch(action(value))
        }
    }
    const labels = ['Name', 'Email', 'Password', 'Phone', 'Enrollment Number', 'Course', 'Stream', 'Section']
    const actions = [authActions.changeSignupName, authActions.changeSignupEmail, authActions.changeSignupPassword, authActions.changeSignupPhone, authActions.changeSignupEnrollment, authActions.changeSignupCourse, authActions.changeSignupStream, authActions.changeSignupSection]
    const validity = [signup.nameError, signup.emailError, signup.passwordError, signup.phoneError, signup.enrollmentError, signup.courseError, signup.streamError, signup.sectionError]
    const handlers = actions.map(action => generateChangeHandler(action))
    const options = {
        'Course': {
            current: signup.course,
            items: ['BSc', 'BTech', 'BCom', 'BA', 'MSc', 'MTech', 'MCom', 'MA']
        },
        'Stream': {
            current: signup.stream,
            items: ['Computer Science', 'Information Technology', 'Machine Learning', 'Internet of Things', 'Botany', 'Zoology', 'Physiology', 'Maths', 'Physics', 'Chemisty', 'Commerce', 'English', 'Geography']
        },
        'Section': {
            current: signup.section,
            items: ['Single', 'Double', 'Triple']
        }
    }

    return (<Container>
        <Form
            labels={labels}
            handlers={handlers}
            validity={validity}
            options={options}
        />
        <SignupButton />
        <HelperText label={'Already have an account?'} dark />
    </Container>)
}

export default Signup