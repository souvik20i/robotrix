import { useState, useRef } from "react"
import { StyleSheet } from "react-native"
import { useRouter, useLocalSearchParams, Stack } from "expo-router"
import { Video } from "expo-av"

import Container from "../../../../components/ui/Container"
import Button from "../../../../components/ui/Button"
import content from "../../../../public/endgame.mp4"

const Topic = () => {
    const { topic } = useLocalSearchParams()
    const [status, setStatus] = useState({})
    const videoRef = useRef()
    const router = useRouter()
    const { isPlaying } = status
    const playbackHandler = () => {
        if (isPlaying) videoRef.current.pauseAsync()
        else videoRef.current.playAsync()
    }

    return (<Container style={styles.container}>
        <Stack.Screen options={{ title: `Topic ${topic}` }} />
        <Video
            ref={videoRef}
            style={styles.video}
            source={content}
            resizeMode='contain'
            onPlaybackStatusUpdate={setStatus}
            useNativeControls
            shouldPlay
        />
        <Button label={isPlaying ? 'Pause' : 'Play'} onPress={playbackHandler} />
        <Button label={'Test'} onPress={() => router.push('/modules/1/1/test')} />
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start'
    },
    video: {
        height: '23%',
        width: '100%'
    }
})

export default Topic