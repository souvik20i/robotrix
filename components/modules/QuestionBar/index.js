import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

import colors from "../../../public/colors"

const QuestionBar = ({ questions }) => {
    return (<View style={styles.bar}>
        <Text style={styles.header}>Questions</Text>
        <View style={styles.blocks}>
            {questions.map((q, i) => <View key={i} style={styles.block}>
                <TouchableOpacity>
                    <Text style={styles.serial}>{i + 1}</Text>
                </TouchableOpacity>
            </View>)}
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
        paddingBottom: 15,
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