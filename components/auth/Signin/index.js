import { View, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"

import SigninButton from "./SigninButton"
import Container from "../../ui/Container"
import Input from "../../ui/Input"
import HelperText from "../../ui/HelperText"

import { authActions } from "../../../store/authSlice"

const Signin = () => {
    const dispatch = useDispatch()

    const phoneEmailChangeHandler = value => {
        if (isNaN(value)) {
            dispatch(authActions.changeSigninEmail(value))
            dispatch(authActions.changeSigninPhone(''))
        } else {
            dispatch(authActions.changeSigninPhone(value))
            dispatch(authActions.changeSigninEmail(''))
        }
    }

    const passwordChangeHandler = value => {
        dispatch(authActions.changeSigninPassword(value))
    }

    return (<Container style={styles.container}>
        <View style={styles.fields}>
            <Input label={'Phone / Email'} onChange={phoneEmailChangeHandler} />
            <Input label={'Password'} onChange={passwordChangeHandler} secured />
        </View>
        <View style={styles.actions}>
            <SigninButton />
            <HelperText label={'Forgot your password?'} dark />
        </View>
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between'
    },
    fields: {
        width: '100%'
    },
    actions: {
        alignItems: 'center'
    }
})

export default Signin