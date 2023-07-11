import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { testActions } from "../../../store/test-slice"

import colors from "../../../public/colors"

const Block = ({ serial, question }) => {
    const dispatch = useDispatch()
    const { serial: currentSerial } = useSelector(state => state.test.question)
    const questionChangeHandler = () => {
        dispatch(testActions.changeQuestion({
            serial,
            ...question
        }))
    }
    return (<View style={{
        ...styles.block,
        backgroundColor: (currentSerial === serial) ? colors.bgSecondary : colors.bgPrimary
    }}>
        <TouchableOpacity onPress={questionChangeHandler}>
            <Text style={{
                ...styles.serial,
                color: (currentSerial === serial) ? colors.textLight : colors.textDark
            }}>{serial}</Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    block: {
        margin: 3,
        borderRadius: 10,
        elevation: 1
    },
    serial: {
        fontSize: 20,
        paddingVertical: 5,
        paddingHorizontal: 10
    }
})

export default Block