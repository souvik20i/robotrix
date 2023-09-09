import { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useDispatch, useSelector } from "react-redux"
import { feedbackActions } from "../../../store/feedback-slice"
import { useGet, usePost } from "../../../hooks/use-http"
import { colors } from "../../../colors"

import Constants from "expo-constants"
import jwtDecode from "jwt-decode"
import Button from "../../ui/Button"
import Loader from "../../ui/Loader"

const Submit = ({ frameStyle, textStyle }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { getRequest } = useGet(), { postRequest, isLoading: isPostLoading } = usePost()
    const { domain } = Constants.expoConfig.extra
    const { token } = useSelector(state => state.auth)
    const { _id } = jwtDecode(token)
    const { modules, currentModule } = useSelector(state => state.module)
    const { questions } = modules[currentModule]
    const { givenAnswers } = useSelector(state => state.test)
    const [hasPassedEver, setHasPassedEver] = useState()
    const moduleIndex = `module${currentModule + 1}`, url = `${domain}/progress/${_id}`

    useEffect(() => {
        (async () => {
            const { progress } = await getRequest(url, token)
            setHasPassedEver(progress[moduleIndex]['quiz'])
        })().catch(console.error)
    }, [])

    const getScore = () => {
        let score = 0
        for (const k in givenAnswers) {
            if (givenAnswers[k] === questions[k].answer) score++;
        }
        return Math.floor((score / questions.length) * 100)
    }

    const changeProgress = async (hasPassed) => {
        if (!hasPassedEver && hasPassed) {
            await postRequest(url, { progressData: { [moduleIndex]: { quiz: true } } }, token)
            setHasPassedEver(true)
        }
    }

    const submitHandler = () => {
        const score = getScore()
        const hasPassed = score === 100
        changeProgress(hasPassed).catch(console.error)
        const congrats = 'Congratulations! for your marvelous achievement.', cleared = "Don't worry! You already cleared this assessment.", retry = 'Please try again because you need 100% marks to go ahead.'
        dispatch(feedbackActions.sendFeedback({
            message: `You scored ${score}% this time. ${hasPassed ? congrats : hasPassedEver ? cleared : retry}`,
            success: hasPassed || hasPassedEver
        }))
        router.back()
    }

    return (<Button
        label={isPostLoading ? <Loader color={colors.textLight} /> : 'Submit'}
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