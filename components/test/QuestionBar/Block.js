import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import { testActions } from "../../../store/test-slice"

import colors from "../../../public/colors"

const Block = ({ serial, question }) => {
    const dispatch = useDispatch()
    const questionChangeHandler = () => dispatch(testActions.changeQuestion({
        serial,
        ...question
    }))
    return (<View style={styles.block}>
        <TouchableOpacity onPress={questionChangeHandler}>
            <Text style={styles.serial}>{serial}</Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: colors.bgSecondary,
        margin: 5,
        borderRadius: 10,
        elevation: 1
    },
    serial: {
        color: colors.textLight,
        fontSize: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
    }
})

export default Block