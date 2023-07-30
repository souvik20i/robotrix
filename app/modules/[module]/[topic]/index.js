import { useState } from "react"
import { StyleSheet } from "react-native"
import { Stack } from "expo-router"
import { lockAsync, OrientationLock } from "expo-screen-orientation"
import { useSelector } from "react-redux"

import Container from "../../../../components/ui/Container"
import Playback from "../../../../components/topic/Playback"
import Resources from "../../../../components/topic/Resources"

const Topic = () => {
    const { currentTopic } = useSelector(state => state.module)
    const [isFullscreen, setIsFullscreen] = useState(false)

    const enterFullscreenHandler = async () => {
        await lockAsync(OrientationLock.LANDSCAPE)
        setIsFullscreen(true)
    }

    const exitFullscreenHandler = async () => {
        await lockAsync(OrientationLock.PORTRAIT)
        setIsFullscreen(false)
    }
    return (<Container style={styles.container}>
        <Stack.Screen options={{
            title: currentTopic,
            headerShown: !isFullscreen,
            statusBarHidden: isFullscreen
        }} />
        <Playback
            uri={'https://daus-one.s3.ap-south-1.amazonaws.com/robotic+sensor.mp4'}
            orientation={{
                isFullscreen, enterFullscreenHandler, exitFullscreenHandler
            }}
        />
        {!isFullscreen && < Resources />}
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start'
    }
})

export default Topic