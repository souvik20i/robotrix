import { useEffect } from "react"
import { View, StyleSheet } from "react-native"
import { Stack } from "expo-router"
import { useDispatch, useSelector } from "react-redux"
import { testActions } from "../../../../store/test-slice"

import Container from "../../../../components/ui/Container"
import QuestionBar from "../../../../components/test/QuestionBar"
import Question from "../../../../components/test/Question"
import Options from "../../../../components/test/Options"
import Actions from "../../../../components/test/Actions"
import colors from "../../../../public/colors"

const Test = () => {
    const dispatch = useDispatch()
    const { modules, currentModule } = useSelector(state => state.module)
    const { questions } = modules[currentModule]
    const { currentQuestion } = useSelector(state => state.test)
    const { id, content, options } = questions[currentQuestion]

    useEffect(() => {
        dispatch(testActions.changeQuestion(0))
        dispatch(testActions.clearAnswers())
    }, [])

    return (<Container style={styles.container}>
        <Stack.Screen options={{ title: `Module ${currentModule + 1} Assessment` }} />
        <QuestionBar questions={questions} />
        <View style={styles.interaction}>
            <Question id={id} content={content} />
            <Options labels={options} />
        </View>
        <Actions />
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgGrey,
        justifyContent: 'flex-start'
    },
    interaction: {
        width: '100%',
        alignItems: 'center'
    }
})

export default Test