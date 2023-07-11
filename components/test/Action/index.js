import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

import TurnPrev from "./TurnPrev"
import TurnNext from "./TurnNext"
import colors from "../../../public/colors"

const Action = () => {
    const { answers } = useSelector(state => state.test)
    const submitHandler = () => console.log(answers)

    return (<View style={styles.action}>
        <TurnPrev style={styles.turn} />
        <TouchableOpacity onPress={submitHandler}>
            <Text>Submit</Text>
        </TouchableOpacity>
        <TurnNext style={styles.turn} />
    </View>)
}

const styles = StyleSheet.create({
    action: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    turn: {
        backgroundColor: colors.bgSecondary,
        borderRadius: 10
    }
})

export default Action