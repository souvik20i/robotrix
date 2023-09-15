import { useState, useRef, useEffect } from "react"

import Video from "./Video"
import Controls from "./Controls"

const Playback = ({ uri, orientation }) => {
    const videoRef = useRef()
    const [status, setStatus] = useState({})
    const changeStatusHandler = status => setStatus(status)

    const [isControlsActive, setIsControlsActive] = useState(true)
    const showControlsHandler = () => setIsControlsActive(true)
    const hideControlsHandler = () => setIsControlsActive(false)

    const hideControlsAfterDelay = () => setTimeout(() => hideControlsHandler(), 5000)
    useEffect(() => {
        if (!status.isPlaying) setIsControlsActive(true)
    }, [status.isPlaying])

    const togglePlaybackHandler = () => {
        if (status.isPlaying) {
            videoRef.current.pauseAsync()
        }
        else {
            videoRef.current.playAsync()
            hideControlsAfterDelay()
        }
    }

    const changePositionHandler = position => videoRef.current.playFromPositionAsync(position)
    const changeSpeedHandler = rate => videoRef.current.setRateAsync(rate, true)

    return (<>
        <Video
            ref={videoRef}
            uri={uri}
            isFullscreen={orientation.isFullscreen}
            onPress={showControlsHandler}
            onChange={changeStatusHandler}
        />
        {isControlsActive &&
            <Controls
                status={status}
                orientation={orientation}
                onPress={hideControlsHandler}
                onToggle={togglePlaybackHandler}
                onChangePosition={changePositionHandler}
                onChangeSpeed={changeSpeedHandler}
            />
        }
    </>)
}

export default Playback