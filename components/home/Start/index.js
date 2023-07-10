import { View, StyleSheet } from "react-native"

import Button from "../../ui/Button"

const Start = () => {
    return (<View style={styles.start}>
        <Button label={'Start Learning'} />
    </View>)
}

const styles = StyleSheet.create({
    start: {
        flex: 0.3,
        paddingTop: 20
    }
})

export default Start