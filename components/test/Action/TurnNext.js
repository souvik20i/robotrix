import { View, TouchableOpacity, StyleSheet } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import { useDispatch, useSelector } from "react-redux"
import { testActions } from "../../../store/test-slice"

import questions from "../../../data/questions"

const TurnNext = ({ style }) => {
    const dispatch = useDispatch()
    let { serial } = useSelector(state => state.test.question)
    const nextQuestionHandler = () => {
        if (serial == questions.length) serial = 0
        dispatch(testActions.changeQuestion({
            serial: serial + 1,
            ...questions[serial]
        }))
    }
    return (<View style={style}>
        <TouchableOpacity
            style={styles.icon}
            onPress={nextQuestionHandler}>
            <AntDesign name="right"
                size={24}
                color="white"
            />
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    icon: {
        padding: 10
    }
})

export default TurnNext