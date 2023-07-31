import { View, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

import TurnPrev from "./TurnPrev"
import TurnNext from "./TurnNext"
import Clear from "./Clear"
import Submit from "./Submit"
import colors from "../../../public/colors"

const Action = () => {
    const { serial } = useSelector(state => state.test.question)
    const { modules, currentModule } = useSelector(state => state.module)
    const { questions } = modules[currentModule]

    return (<View style={styles.action}>
        <TurnPrev style={styles.turn} />
        <Clear style={styles.actionButton} />
        {serial === questions.length && <Submit style={styles.actionButton} />}
        <TurnNext style={styles.turn} />
    </View>)
}

const styles = StyleSheet.create({
    action: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        position: 'absolute',
        bottom: 20
    },
    turn: {
        backgroundColor: colors.bgSecondary,
        borderRadius: 10,
        elevation: 1
    },
    actionButton: {
        width: '35%',
        backgroundColor: colors.bgSecondary,
        borderRadius: 10,
        elevation: 1
    }
})

export default Action