import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

import colors from "../../../public/colors"

const Submit = ({ style }) => {
    const { answers } = useSelector(state => state.test)
    const submitHandler = () => console.log(answers)
    return (<View style={style}>
        <TouchableOpacity
            style={styles.submit}
            onPress={submitHandler}>
            <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    submit: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    submitText: {
        fontSize: 20,
        color: colors.textLight
    }
})

export default Submit