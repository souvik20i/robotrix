import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

import Container from "../../ui/Container"
import colors from "../../../public/colors"

const QuestionBar = ({ questions }) => {
    return (<Container style={styles.container}>
        <Text style={styles.header}>Questions</Text>
        <View style={styles.blocks}>
            {questions.map((q, i) => <View key={i} style={styles.block}>
                <TouchableOpacity>
                    <Text style={styles.serial}>{i + 1}</Text>
                </TouchableOpacity>
            </View>)}
        </View>
    </Container >)
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
    },
    header: {
        fontSize: 30,
        padding: 15,
        color: colors.textDark
    },
    blocks: {
        flexDirection: 'row'
    },
    block: {
        backgroundColor: colors.bgSecondary,
        margin: 5,
        borderRadius: 10
    },
    serial: {
        color: colors.textLight,
        fontSize: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
    }
})

export default QuestionBar