import { StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useDispatch, useSelector } from "react-redux"
import { feedbackActions } from "../../../store/feedback-slice"

import AsyncStorage from "@react-native-async-storage/async-storage"
import Button from "../../ui/Button"

const Submit = ({ frameStyle, textStyle }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { modules, currentModule } = useSelector(state => state.module)
    const { questions } = modules[currentModule]
    const { givenAnswers } = useSelector(state => state.test)

    const hasTestPassed = () => {
        let score = 0
        for (const k in givenAnswers) {
            if (givenAnswers[k] === questions[k].answer) score++;
        }
        const percent = Math.floor((score / questions.length) * 100)
        return percent >= 80
    }

    const changeProgress = async (hasPassed) => {
        const hasPassedEverKey = `has-passed-${currentModule}`
        const hasPassedEver = parseInt(await AsyncStorage.getItem(hasPassedEverKey) || 0)
        if (!hasPassedEver) {
            if (hasPassed) {
                await AsyncStorage.setItem(hasPassedEverKey, '1')
                const completedTopics = parseInt(await AsyncStorage.getItem('completed-topics') || 0) + 1
                await AsyncStorage.setItem('completed-topics', completedTopics.toString())
            }
            else await AsyncStorage.setItem(hasPassedEverKey, '2')
        }
    }

    const submitHandler = () => {
        const hasPassed = hasTestPassed()
        changeProgress(hasPassed).catch(console.error)
        dispatch(feedbackActions.sendFeedback({
            message: `${hasPassed ? 'You Passed' : 'Please Retry'} ! Scored ${percent}%`,
            success: hasPassed
        }))
        router.back()
    }

    return (<Button
        label={'Submit'}
        onPress={submitHandler}
        frameStyle={{ ...frameStyle, ...styles.submit }}
        textStyle={textStyle}
    />)
}

const styles = StyleSheet.create({
    submit: {
        marginVertical: 0
    }
})

export default Submit