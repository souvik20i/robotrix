import { useState, useRef, useEffect } from "react"
import { useDispatch } from "react-redux"
import { feedbackActions } from "../../../store/feedback-slice"

import Video from "./Video"
import Controls from "./Controls"

const Playback = ({ uri, orientation }) => {
    const videoRef = useRef()
    const dispatch = useDispatch()
    const [status, setStatus] = useState({})
    const [isDeliberatelyPaused, setIsDeliberatelyPaused] = useState(false)
    const changeStatusHandler = status => setStatus(status)

    const [isControlsActive, setIsControlsActive] = useState(true)
    const showControlsHandler = () => setIsControlsActive(true)
    const hideControlsHandler = () => setIsControlsActive(false)

    const hideControlsAfterDelay = () => setTimeout(() => hideControlsHandler(), 5000)
    useEffect(() => {
        if (status && status.isPlaying === false) setIsControlsActive(true)
        if (status && status.isLoaded === false) dispatch(feedbackActions.sendFeedback({
            message: 'Video is not loaded\nKindly check your connectivity',
            success: false
        }))
    }, [status.isPlaying])

    const togglePlaybackHandler = () => {
        if (status.isPlaying) {
            videoRef.current.pauseAsync()
            setIsDeliberatelyPaused(true)
        }
        else {
            videoRef.current.playAsync()
            setIsDeliberatelyPaused(false)
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
                isDeliberatelyPaused={isDeliberatelyPaused}
                onPress={hideControlsHandler}
                onToggle={togglePlaybackHandler}
                onChangePosition={changePositionHandler}
                onChangeSpeed={changeSpeedHandler}
            />
        }
    </>)
}

export default Playback