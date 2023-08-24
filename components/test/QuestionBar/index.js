import { View, Text, StyleSheet } from "react-native"
import { colors } from "../../../colors"

import Block from "./Block"

const QuestionBar = ({ questions }) => {
    return (<View style={styles.bar}>
        <Text style={styles.header}>Questions</Text>
        <View style={styles.blocks}>
            {questions.map(q => <Block key={q.id} question={q} />)}
        </View>
    </View >)
}

const styles = StyleSheet.create({
    bar: {
        width: '90%',
        alignItems: 'center',
        padding: 20
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 10,
        color: colors.textDark
    },
    blocks: {
        flexDirection: 'row'
    }
})

export default QuestionBar