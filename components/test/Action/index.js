import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import { useDispatch, useSelector } from "react-redux"
import { testActions } from "../../../store/test-slice"

import questions from "../../../data/questions"

const Action = () => {
    const dispatch = useDispatch()
    let { serial } = useSelector(state => state.test.question)
    const { answers } = useSelector(state => state.test)

    const prevQuestionHandler = () => {
        if (serial == 1) serial = questions.length + 1
        dispatch(testActions.changeQuestion({
            serial: serial - 1,
            ...questions[serial - 2]
        }))
    }

    const nextQuestionHandler = () => {
        if (serial == questions.length) serial = 0
        dispatch(testActions.changeQuestion({
            serial: serial + 1,
            ...questions[serial]
        }))
    }

    const submitHandler = () => {
        console.log(answers)
    }

    return (<View style={styles.action}>
        <TouchableOpacity onPress={prevQuestionHandler}>
            <AntDesign name="left"
                size={24}
                color="black"
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={submitHandler}><Text>Submit</Text></TouchableOpacity>
        <TouchableOpacity onPress={nextQuestionHandler}>
            <AntDesign name="right"
                size={24}
                color="black"
            />
        </TouchableOpacity>
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