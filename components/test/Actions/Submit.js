import { StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useDispatch, useSelector } from "react-redux"
import { feedbackActions } from "../../../store/feedback-slice"

import Button from "../../ui/Button"

const Submit = ({ frameStyle, textStyle }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { modules, currentModule } = useSelector(state => state.module)
    const { questions } = modules[currentModule]
    const { givenAnswers } = useSelector(state => state.test)

    const submitHandler = () => {
        let score = 0
        for (const k in givenAnswers) {
            if (givenAnswers[k] === questions[k].answer) score++;
        }
        const percent = Math.floor((score / questions.length) * 100)
        const hasPassed = percent >= 80
        dispatch(feedbackActions.sendFeedback({
            message: `${hasPassed ? 'You Passed' : 'Please Retry'}! Scored ${percent}%`,
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