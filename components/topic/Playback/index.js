import { useState, useRef } from "react"

import Video from "./Video"
import Controls from "./Controls"

const Playback = ({ uri }) => {
    const videoRef = useRef()
    const [status, setStatus] = useState({})
    const changeStatusHandler = status => setStatus(status)

    const [isControlsActive, setIsControlsActive] = useState(false)
    const showControlsHandler = () => {
        setIsControlsActive(true)
        videoRef.current.pauseAsync()
    }
    const hideControlsHandler = () => setIsControlsActive(false)

    const { isPlaying } = status
    const toggleVideo = () => {
        if (isPlaying) {
            videoRef.current.pauseAsync()
        }
        else {
            videoRef.current.playAsync()
            setTimeout(() => hideControlsHandler(), 1000)
        }
    }

    return (<>
        <Video
            ref={videoRef}
            uri={uri}
            onPress={showControlsHandler}
            onChange={changeStatusHandler}
        />
        <Controls
            isActive={isControlsActive}
            isPlaying={isPlaying}
            onPress={hideControlsHandler}
            onChange={toggleVideo}
        />
    </>)
}

export default Playback