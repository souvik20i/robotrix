import { StyleSheet } from "react-native"
import { Stack } from "expo-router"

import Container from "../../components/ui/Container"
import Progress from "../../components/certificate/Progress"
import Template from "../../components/certificate/Template"
import Actions from "../../components/certificate/Actions"

const Certificate = () => {
    const completed = 11, expected = 32
    return (<Container style={styles.container}>
        <Stack.Screen options={{ title: 'Course Certificate' }} />
        <Progress completed={completed} expected={expected} />
        <Template isCompleted={completed == expected} />
        {completed == expected && <Actions name={'Souvik Sarkar'} />}
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly'
    }
})

export default Certificate