import { useEffect } from "react"
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, BackHandler } from "react-native"
import { useSelector } from "react-redux"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "../../../colors"

import useConversion from "../../../hooks/use-conversion"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Slider from "@react-native-community/slider"

const ProgressBar = ({ current, length, orientation, onChange }) => {
    const { currentModule, currentTopic } = useSelector(state => state.module)
    const maxReachedKey = `max-reached-${currentModule}-${currentTopic}`
    const isFinishedKey = `is-finished-${currentModule}-${currentTopic}`
    const currentTimestamp = useConversion(current)
    const totalDuration = useConversion(length)

    const changeProgress = async () => {
        const maxReached = parseInt(await AsyncStorage.getItem(maxReachedKey) || 0)
        if (current > maxReached) await AsyncStorage.setItem(maxReachedKey, current.toString())
        const isFinished = parseInt(await AsyncStorage.getItem(isFinishedKey) || 0)
        if (!isFinished && length - maxReached < 5000) {
            await AsyncStorage.setItem(isFinishedKey, '1')
            const completedTopics = parseInt(await AsyncStorage.getItem('completed-topics') || 0) + 1
            await AsyncStorage.setItem('completed-topics', completedTopics.toString())
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
        if (value < stored) onChange(value)
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