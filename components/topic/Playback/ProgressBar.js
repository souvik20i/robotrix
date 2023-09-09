import { useState, useEffect } from "react"
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, BackHandler } from "react-native"
import { useSelector } from "react-redux"
import { MaterialIcons } from "@expo/vector-icons"
import { useGet, usePost } from "../../../hooks/use-http"
import { colors } from "../../../colors"

import Constants from "expo-constants"
import jwtDecode from "jwt-decode"
import useConversion from "../../../hooks/use-conversion"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Slider from "@react-native-community/slider"

const ProgressBar = ({ current, length, orientation, onChange }) => {
    const { getRequest } = useGet(), { postRequest } = usePost()
    const { domain } = Constants.expoConfig.extra
    const { token } = useSelector(state => state.auth)
    const { _id } = jwtDecode(token)
    const { currentModule, currentTopic } = useSelector(state => state.module)
    const [isFinished, setIsFinished] = useState()
    const currentTimestamp = useConversion(current), totalDuration = useConversion(length)
    const maxReachedKey = `max-reached-${currentModule}-${currentTopic}`
    const moduleIndex = `module${currentModule + 1}`, topicIndex = `topic${currentTopic + 1}`, url = `${domain}/progress/${_id}`

    const changeProgress = async () => {
        const maxReached = parseInt(await AsyncStorage.getItem(maxReachedKey) || 0)
        if (current > maxReached) await AsyncStorage.setItem(maxReachedKey, current.toString())
        const { progress } = await getRequest(url, token)
        setIsFinished(progress[moduleIndex][topicIndex])
        if (!progress[moduleIndex][topicIndex] && length - maxReached < 5000) {
            await postRequest(url, { progressData: { [moduleIndex]: { [topicIndex]: true } } }, token)
            setIsFinished(true)
        }
    }

    const exitFullscreenByBackHandler = () => {
        if (orientation.isFullscreen) {
            orientation.exitFullscreenHandler()
            return true
        }
    }

    useEffect(() => {
        changeProgress().catch(console.error)
        BackHandler.addEventListener('hardwareBackPress', exitFullscreenByBackHandler)
        return () => BackHandler.removeEventListener('hardwareBackPress', exitFullscreenByBackHandler)
    }, [current])

    const slidingHandler = async (value) => {
        const stored = parseInt(await AsyncStorage.getItem(maxReachedKey) || 0)
        if (isFinished || value < stored) onChange(value)
    }

    return (<TouchableWithoutFeedback>
        <View style={styles.bottomBar}>
            <View style={styles.progressBar}>
                {length && <Text style={styles.time}>{currentTimestamp}</Text>}
                <Slider
                    style={{
                        ...styles.slider,
                        width: !length ? '95%' : orientation.isFullscreen ? '90%' : '75%'
                    }}
                    value={current}
                    minimumValue={0}
                    maximumValue={length}
                    minimumTrackTintColor={colors.bgSecondary}
                    maximumTrackTintColor={colors.bgGrey}
                    thumbTintColor={colors.bgSecondary}
                    onSlidingComplete={slidingHandler}
                />
                {length && <Text style={styles.time}>{totalDuration}</Text>}
            </View>
            <TouchableOpacity>
                {!orientation.isFullscreen
                    ?
                    <MaterialIcons name="fullscreen" size={24} color={colors.textLight} onPress={orientation.enterFullscreenHandler} />
                    :
                    <MaterialIcons name="fullscreen-exit" size={24} color={colors.textLight} onPress={orientation.exitFullscreenHandler} />
                }
            </TouchableOpacity>
        </View>
    </TouchableWithoutFeedback>)
}

const styles = StyleSheet.create({
    bottomBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10
    },
    progressBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    time: {
        color: colors.textLight
    },
    slider: {
        height: 10
    }
})

export default ProgressBar