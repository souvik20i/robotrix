import { ScrollView, StyleSheet } from "react-native"

import Container from "../../ui/Container"
import Input from "../../ui/Input"
import Button from "../../ui/Button"
import HelperText from "../../ui/HelperText"

const Signup = () => {
    return (<Container>
        <ScrollView style={styles.info}>
            <Input label={'Name'} />
            <Input label={'Email'} />
            <Input label={'Enrollment No.'} />
            <Input label={'Phone No.'} />
            <Input label={'City'} />
            <Input label={'Stream'} />
            <Input label={'Course Tenure'} />
        </ScrollView>
        <Button label={'Signup'} dark />
        <HelperText label={'Already have an account?'} dark />
    </Container>)
}

const styles = StyleSheet.create({
    info: {
        width: '100%'
    }
})

export default Signup