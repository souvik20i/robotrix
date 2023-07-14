import { useRef } from "react"
import { StyleSheet } from "react-native"
import { Video } from "expo-av"

const Playback = ({ uri }) => {
    const videoRef = useRef()
    const playbackHandler = status => console.log(status)
    return (<Video
        ref={videoRef}
        style={styles.video}
        // source={{ uri }}
        source={uri}
        resizeMode='contain'
        onPlaybackStatusUpdate={playbackHandler}
        useNativeControls
    />)
}

const styles = StyleSheet.create({
    video: {
        height: '25%',
        width: '100%',
        backgroundColor: 'black'
    }
})

export default Playback