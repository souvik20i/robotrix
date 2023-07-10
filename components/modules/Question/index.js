import { View, Text, StyleSheet } from "react-native"

import Card from "../../ui/Card"

const Question = ({ serial, content }) => {
    return (<Card>
        <Text style={styles.header}>{`Question #${serial}`}</Text>
        <Text style={styles.content}>{content}</Text>
    </Card>)
}

const styles = StyleSheet.create({
    header: {
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
})


export default Question