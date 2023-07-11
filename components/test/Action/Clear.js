import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import { testActions } from "../../../store/test-slice"

import colors from "../../../public/colors"

const Clear = ({ style }) => {
    const dispatch = useDispatch()
    const clearAnswerHandler = () => dispatch(testActions.clearCurrentAnswer())
    return (<View style={style}>
        <TouchableOpacity
            style={styles.clear}
            onPress={clearAnswerHandler}>
            <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    clear: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    clearText: {
        fontSize: 20,
        color: colors.textLight
    }
})

export default Clear