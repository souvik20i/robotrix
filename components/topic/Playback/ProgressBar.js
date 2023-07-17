import { useEffect } from "react"
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import AsyncStorage from "@react-native-async-storage/async-storage"
import Slider from "@react-native-community/slider"
import colors from "../../../public/colors"

const ProgressBar = ({ current, length, onChange }) => {
    const currentTimestamp = convertMillis(current)
    const totalDuration = convertMillis(length)

    useEffect(() => {
        const setMaxReached = async () => {
            const stored = await AsyncStorage.getItem('max-reached') || 0;
            if (current > stored) await AsyncStorage.setItem('max-reached', current.toString())
        }
        setMaxReached().catch(err => console.log(err))
    }, [current])

    const slidingHandler = async (value) => {
        const stored = await AsyncStorage.getItem('max-reached');
        if (value < stored) onChange(value)
    }

    return (<TouchableWithoutFeedback>
        <View style={styles.bottomBar}>
            <View style={styles.progressBar}>
                <Text style={styles.time}>{currentTimestamp}</Text>
                <Slider
                    style={styles.slider}
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
                <MaterialIcons name="fullscreen" size={24} color={colors.textLight} />
            </TouchableOpacity>
        </View>
    </TouchableWithoutFeedback>)
}

const styles = StyleSheet.create({
    bottomBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        height: 10,
        width: '75%'
    }
})

const convertMillis = millis => {
    const totalSeconds = Math.round(millis / 1000)
    const seconds = totalSeconds % 60
    const totalMinutes = Math.floor(totalSeconds / 60)
    const minutes = totalMinutes % 60
    const hours = Math.floor(totalMinutes / 60)

    const makeDoubleDigits = value => (value < 10) ? `0${value}` : value
    if (!hours) return `${makeDoubleDigits(minutes)}:${makeDoubleDigits(seconds)}`
    return `${makeDoubleDigits(hours)}:${makeDoubleDigits(minutes)}:${makeDoubleDigits(seconds)}`
}

export default ProgressBar