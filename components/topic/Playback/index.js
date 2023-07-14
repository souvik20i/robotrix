import { useState, useRef } from "react"
import { StyleSheet } from "react-native"
import { Video } from "expo-av"

const Playback = ({ uri }) => {
    const videoRef = useRef()
    const [status, setStatus] = useState({})
    return (<Video
        ref={videoRef}
        style={styles.video}
        source={uri}
        resizeMode='contain'
        onPlaybackStatusUpdate={setStatus}
        useNativeControls
        shouldPlay
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