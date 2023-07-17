import { useState, useRef, useEffect } from "react"

import Video from "./Video"
import Controls from "./Controls"

const Playback = ({ uri }) => {
    const videoRef = useRef()
    const [status, setStatus] = useState({})
    const changeStatusHandler = status => setStatus(status)

    const [isControlsActive, setIsControlsActive] = useState(true)
    const showControlsHandler = () => setIsControlsActive(true)
    const hideControlsHandler = () => setIsControlsActive(false)

    const hideControlsAfterDelay = () => setTimeout(() => hideControlsHandler(), 1000)
    useEffect(() => { hideControlsAfterDelay() }, [])

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
            onPress={showControlsHandler}
            onChange={changeStatusHandler}
        />
        {isControlsActive &&
            <Controls
                status={status}
                onPress={hideControlsHandler}
                onToggle={togglePlaybackHandler}
                onChangePosition={changePositionHandler}
                onChangeSpeed={changeSpeedHandler}
            />
        }
    </>)
}

export default Playback