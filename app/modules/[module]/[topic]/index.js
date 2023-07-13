import { useState, useRef } from "react"
import { StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { Video } from "expo-av"

import Container from "../../../../components/ui/Container"
import Button from "../../../../components/ui/Button"

const Topic = () => {
    const [status, setStatus] = useState({})
    const videoRef = useRef()
    const router = useRouter()
    const { isPlaying } = status
    const playbackHandler = () => {
        if (isPlaying) videoRef.current.pauseAsync()
        else videoRef.current.playAsync()
    }

    return (<Container style={styles.container}>
        <Video
            ref={videoRef}
            style={styles.video}
            source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            resizeMode='contain'
            onPlaybackStatusUpdate={setStatus}
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
        height: '30%',
        width: '100%'
    }
})

export default Topic