import { View, Text, StyleSheet } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import { useDispatch, useSelector } from "react-redux"
import { testActions } from "../../../store/test-slice"

import questions from "../../../data/questions"

const Action = () => {
    const dispatch = useDispatch()
    const { serial } = useSelector(state => state.test.question)
    const previousQuestionHandler = () => {
        if (serial == 1) return
        dispatch(testActions.changeQuestion({
            serial: serial - 1,
            ...questions[serial - 2]
        }))
    }
    const nextQuestionHandler = () => {
        if (serial == questions.length) return
        dispatch(testActions.changeQuestion({
            serial: serial + 1,
            ...questions[serial]
        }))
    }

    return (<View style={styles.action}>
        <AntDesign name="left"
            size={24}
            color="black"
            onPress={previousQuestionHandler}
        />
        <Text>Submit</Text>
        <AntDesign name="right"
            size={24}
            color="black"
            onPress={nextQuestionHandler}
        />
    </View>)
}

const styles = StyleSheet.create({
    action: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    }
})

export default Action