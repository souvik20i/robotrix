import { View, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { testActions } from "../../../store/test-slice"
import { AntDesign } from "@expo/vector-icons"

import Button from "../../ui/Button"
import Submit from "./Submit"

const Actions = () => {
    const dispatch = useDispatch()
    const { modules, currentModule } = useSelector(state => state.module)
    const { questions } = modules[currentModule]
    const { currentQuestion } = useSelector(state => state.test)

    const prevQuestionHandler = () => {
        const i = (currentQuestion - 1 + questions.length) % questions.length
        dispatch(testActions.changeQuestion(i))
    }

    const nextQuestionHandler = () => {
        const i = (currentQuestion + 1) % questions.length
        dispatch(testActions.changeQuestion(i))
    }

    const clearAnswerHandler = () => dispatch(testActions.clearCurrentAnswer())

    return (<View style={styles.actions}>
        {(currentQuestion === questions.length - 1) &&
            <Submit
                frameStyle={styles.frame}
                textStyle={styles.text}
            />
        }
        <View style={styles.interaction}>
            <Button
                label={<AntDesign name="left" size={20} color="white" />}
                onPress={prevQuestionHandler}
                frameStyle={styles.frame}
                textStyle={styles.text}
            />
            <Button
                label={'Clear'}
                onPress={clearAnswerHandler}
                frameStyle={styles.frame}
                textStyle={styles.text}
            />
            <Button
                label={<AntDesign name="right" size={20} color="white" />}
                onPress={nextQuestionHandler}
                frameStyle={styles.frame}
                textStyle={styles.text}
            />
        </View>
    </View>)
}

const styles = StyleSheet.create({
    actions: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        zIndex: 10,
        padding: 20,
        paddingBottom: 0
    },
    interaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    frame: {
        borderRadius: 10
    },
    text: {
        paddingHorizontal: 15,
        paddingVertical: 15
    }
})

export default Actions