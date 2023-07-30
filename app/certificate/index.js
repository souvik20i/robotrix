import { StyleSheet } from "react-native"
import { Stack } from "expo-router"

import Container from "../../components/ui/Container"
import Progress from "../../components/certificate/Progress"
import Template from "../../components/certificate/Template"
import Action from "../../components/certificate/Action"

const Certificate = () => {
    const completed = 32, expected = 32
    return (<Container style={styles.container}>
        <Stack.Screen options={{ title: 'Course Certificate' }} />
        <Progress completed={completed} expected={expected} />
        <Template isCompleted={completed == expected} />
        {completed == expected && <Action name={'Souvik Sarkar'} />}
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly'
    }
})

export default Certificate