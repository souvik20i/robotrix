import { View, TouchableOpacity, StyleSheet } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import { useDispatch, useSelector } from "react-redux"
import { testActions } from "../../../store/test-slice"

import questions from "../../../data/questions"

const TurnPrev = ({ style }) => {
    const dispatch = useDispatch()
    let { serial } = useSelector(state => state.test.question)

    const prevQuestionHandler = () => {
        if (serial == 1) serial = questions.length + 1
        dispatch(testActions.changeQuestion({
            serial: serial - 1,
            ...questions[serial - 2]
        }))
    }
    return (<View style={style}>
        <TouchableOpacity
            style={styles.icon}
            onPress={prevQuestionHandler}>
            <AntDesign name="left"
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

export default TurnPrev