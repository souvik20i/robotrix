import { useState } from "react"
import { StyleSheet } from "react-native"
import { useLocalSearchParams, Stack } from "expo-router"
import { lockAsync, OrientationLock } from "expo-screen-orientation"

import Container from "../../../../components/ui/Container"
import Playback from "../../../../components/topic/Playback"
import Resources from "../../../../components/topic/Resources"

const Topic = () => {
    const { topic } = useLocalSearchParams()
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
            title: `Topic ${topic}`,
            headerShown: !isFullscreen,
            statusBarHidden: isFullscreen
        }} />
        {/* <Playback uri={'https://res.cloudinary.com/duejtqqkp/video/upload/v1689328132/endgame_g8zr1e.mp4'} /> */}
        <Playback
            uri={require('../../../../public/endgame.mp4')}
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