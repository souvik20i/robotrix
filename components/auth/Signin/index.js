import { View, StyleSheet } from "react-native"

import Container from "../../ui/Container"
import Input from "../../ui/Input"
import Button from "../../ui/Button"
import HelperText from "../../ui/HelperText"

const Signin = () => {
    return (<Container style={styles.container}>
        <View style={styles.fields}>
            <Input label={'Phone / Email'} />
            <Input label={'Password'} secured />
        </View>
        <View style={styles.actions}>
            <Button label={'Signin'} dark />
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