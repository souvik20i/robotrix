import { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import { Stack } from "expo-router"
import { useSelector } from "react-redux"
import { useGet } from "../../hooks/use-http"

import Constants from "expo-constants"
import jwtDecode from "jwt-decode"
import useAuth from "../../hooks/use-auth"
import Container from "../../components/ui/Container"
import Loader from "../../components/ui/Loader"
import Progress from "../../components/certificate/Progress"
import Template from "../../components/certificate/Template"
import Action from "../../components/certificate/Action"


const Certificate = () => {
    const { user } = useAuth()
    const { getRequest, isLoading } = useGet()
    const { token } = useSelector(state => state.auth)
    const { _id } = jwtDecode(token)
    const { domain } = Constants.expoConfig.extra
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        const getProgress = async () => {
            const { completion } = await getRequest(`${domain}/progress/${_id}`, token)
            setPercent(completion)
        }
        getProgress().catch(console.error)
    }, [])

    return (<Container style={styles.container}>
        <Stack.Screen options={{ title: 'Course Certificate' }} />
        {isLoading ? <Loader /> : <>
            <Progress portion={percent / 100} />
            <Template user={user} isCompleted={percent === 100} />
            {percent === 100 && <Action name={user} />}
        </>}
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly'
    }
})

export default Certificate