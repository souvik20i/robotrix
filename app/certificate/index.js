import { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import { Stack } from "expo-router"
import { useSelector } from "react-redux"

import useAuth from "../../hooks/use-auth"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Container from "../../components/ui/Container"
import Progress from "../../components/certificate/Progress"
import Template from "../../components/certificate/Template"
import Action from "../../components/certificate/Action"

const Certificate = () => {
    const { user } = useAuth()
    const [completedTopics, setCompletedTopics] = useState(0)
    const { modules } = useSelector(state => state.module)
    const totalTopics = modules.reduce((acc, cur) => acc + cur.topics.length, modules.length)
    const isFinished = completedTopics === totalTopics

    useEffect(() => {
        const getProgress = async () => {
            const completedTopics = parseInt(await AsyncStorage.getItem('completed-topics') || 0)
            setCompletedTopics(completedTopics)
        }
        getProgress().catch(console.error)
    }, [])

    return (<Container style={styles.container}>
        <Stack.Screen options={{ title: 'Course Certificate' }} />
        <Progress portion={completedTopics / totalTopics} />
        <Template user={user} isCompleted={isFinished} />
        {isFinished && <Action name={user} />}
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly'
    }
})

export default Certificate