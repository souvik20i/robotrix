import { useEffect } from "react"
import { Stack, useLocalSearchParams } from "expo-router"
import { useDispatch, useSelector } from "react-redux"
import { testActions } from "../../../../store/test-slice"

import Container from "../../../../components/ui/Container"
import QuestionBar from "../../../../components/test/QuestionBar"
import Question from "../../../../components/test/Question"
import Options from "../../../../components/test/Options"
import Action from "../../../../components/test/Action"
import questions from "../../../../data/questions"

const Test = () => {
    const dispatch = useDispatch()
    const { serial, content, options } = useSelector(state => state.test.question)
    useEffect(() => {
        dispatch(testActions.changeQuestion({
            serial: 1,
            ...questions[0]
        }))
        dispatch(testActions.clearAnswers())
    }, [])

    const { module } = useLocalSearchParams()
    return (<Container>
        <Stack.Screen options={{ title: `Module ${module} Assessment` }} />
        <QuestionBar questions={questions} />
        <Question serial={serial} content={content} />
        <Options labels={options} />
        <Action />
    </Container>)
}

export default Test