import { ScrollView, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"

import SignupButton from "./SignupButton"
import Container from "../../ui/Container"
import Input from "../../ui/Input"
import HelperText from "../../ui/HelperText"

import { authActions } from "../../../store/authSlice"

const Signup = () => {
    const dispatch = useDispatch()
    const nameChangeHandler = value => dispatch(authActions.changeSignupName(value))
    const emailChangeHandler = value => dispatch(authActions.changeSignupEmail(value))
    const enrollmentChangeHandler = value => dispatch(authActions.changeSignupEnrollment(value))
    const phoneChangeHandler = value => dispatch(authActions.changeSignupPhone(value))
    const passwordChangeHandler = value => dispatch(authActions.changeSignupPassword(value))
    const cityChangeHandler = value => dispatch(authActions.changeSignupCity(value))
    const streamChangeHandler = value => dispatch(authActions.changeSignupStream(value))
    const tenureChangeHandler = value => dispatch(authActions.changeSignupTenure(value))

    return (<Container>
        <ScrollView style={styles.info}>
            <Input label={'Name'} onChange={nameChangeHandler} />
            <Input label={'Email'} onChange={emailChangeHandler} />
            <Input label={'Enrollment No.'} onChange={enrollmentChangeHandler} />
            <Input label={'Phone No.'} onChange={phoneChangeHandler} />
            <Input label={'Password'} onChange={passwordChangeHandler}/>
            <Input label={'City'} onChange={cityChangeHandler} />
            <Input label={'Stream'} onChange={streamChangeHandler} />
            <Input label={'Course Tenure'} onChange={tenureChangeHandler} />
        </ScrollView>
        <SignupButton />
        <HelperText label={'Already have an account?'} dark />
    </Container>)
}

const styles = StyleSheet.create({
    info: {
        width: '100%'
    }
})

export default Signup