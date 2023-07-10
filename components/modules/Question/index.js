import { Text, StyleSheet } from "react-native"

import Container from "../../ui/Container"

const Question = ({ serial, content }) => {
    return (<Container style={styles.container}>
        <Text style={styles.header}>{`Question #${serial}`}</Text>
        <Text style={styles.content}>{content}</Text>
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignItems: 'flex-start'
    },
    header: {
        paddingVertical: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
})


export default Question