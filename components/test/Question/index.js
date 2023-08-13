import { Text, StyleSheet } from "react-native"

import Card from "../../ui/Card"

const Question = ({ id, content }) => {
    return (<Card>
        <Text style={styles.header}>{`Question #${id}`}</Text>
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