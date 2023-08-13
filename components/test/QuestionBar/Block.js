import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { testActions } from "../../../store/test-slice"

import colors from "../../../public/colors"

const Block = ({ question }) => {
    const dispatch = useDispatch()
    const { id } = question
    const { currentQuestion } = useSelector(state => state.test)
    const isActive = id === currentQuestion + 1
    const questionChangeHandler = () => dispatch(testActions.changeQuestion(id - 1))

    return (<View style={{
        ...styles.block,
        backgroundColor: isActive ? colors.bgSecondary : colors.bgPrimary
    }}>
        <TouchableOpacity onPress={questionChangeHandler}>
            <Text style={{
                ...styles.serial,
                color: isActive ? colors.textLight : colors.textDark
            }}>{id}</Text>
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