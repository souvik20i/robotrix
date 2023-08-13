import { useEffect } from "react"
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, BackHandler } from "react-native"
import { useSelector } from "react-redux"
import { MaterialIcons } from "@expo/vector-icons"

import useConversion from "../../../hooks/use-conversion"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Slider from "@react-native-community/slider"
import colors from "../../../public/colors"

const ProgressBar = ({ current, length, orientation, onChange }) => {
    const currentTimestamp = useConversion(current)
    const totalDuration = useConversion(length)

    const { currentModule, currentTopic } = useSelector(state => state.module)
    const key = `max-reached-${currentModule}-${currentTopic}`

    useEffect(() => {
        const changeProgress = async () => {
            const maxReached = await AsyncStorage.getItem(key) || 0;
            if (current > maxReached) await AsyncStorage.setItem(key, current.toString())
            if (length - current < 20000) {
                const completedTopics = parseInt(await AsyncStorage.getItem('completed-topics') || 0) + 1
                await AsyncStorage.setItem('completed-topics', completedTopics.toString())
            }
        }
        changeProgress().catch(console.error)
        const exitFullscreenByBackHandler = () => {
            if (orientation.isFullscreen) {
                orientation.exitFullscreenHandler()
                return true
            }
        }
        BackHandler.addEventListener('hardwareBackPress', exitFullscreenByBackHandler)
        return () => BackHandler.removeEventListener('hardwareBackPress', exitFullscreenByBackHandler)
    }, [current])

    const slidingHandler = async (value) => {
        const stored = await AsyncStorage.getItem(key);
        if (value < stored) onChange(value)
    }

    return (<TouchableWithoutFeedback>
        <View style={styles.bottomBar}>
            <View style={styles.progressBar}>
                <Text style={styles.time}>{currentTimestamp}</Text>
                <Slider
                    style={{
                        ...styles.slider,
                        width: orientation.isFullscreen ? '90%' : '75%'
                    }}
                    value={current}
                    minimumValue={0}
                    maximumValue={length}
                    minimumTrackTintColor={colors.bgSecondary}
                    maximumTrackTintColor={colors.bgGrey}
                    thumbTintColor={colors.bgSecondary}
                    onSlidingComplete={slidingHandler}
                />
                <Text style={styles.time}>{totalDuration}</Text>
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