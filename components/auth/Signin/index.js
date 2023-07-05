import { StyleSheet } from "react-native"

import Container from "../../ui/Container"
import Input from "../../ui/Input"
import Button from "../../ui/Button"
import HelperText from "../../ui/HelperText"

const Signin = () => {
    return (<Container>
        <Input label={'Phone / Email'} />
        <Input label={'Password'} secured />
        <Button label={'Signin'} dark />
        <HelperText label={'Forgot your password?'} dark />
    </Container>)
}

const styles = StyleSheet.create({

})

export default Signin