import { useState } from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { colors } from "../../../colors"

import Speed from './Speed'

const TopBar = ({ rate, onChangeRate }) => {
    const [isSpeedActive, setIsSpeedActive] = useState(false)
    const toggleSpeedBox = () => setIsSpeedActive(value => !value)
    const rates = [1, 1.25, 1.5, 1.75, 2]

    return (<TouchableWithoutFeedback>
        <View style={styles.topBar}>
            <View style={styles.speed}>
                <TouchableOpacity onPress={toggleSpeedBox}>
                    <Text style={styles.rate}>{(rate == 1 ? 'Normal' : `${rate}x`)}</Text>
                </TouchableOpacity>
                {isSpeedActive &&
                    <Speed
                        current={rate}
                        rates={rates}
                        onChange={onChangeRate}
                        onToggle={toggleSpeedBox}
                    />
                }
            </View>
            <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={17} color={colors.textLight} />
            </TouchableOpacity>
        </View>
    </TouchableWithoutFeedback>)
}

const styles = StyleSheet.create({
    topBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        zIndex: 10
    },
    speed: {
        alignItems: 'center'
    },
    rate: {
        color: colors.textLight,
        paddingHorizontal: 20
    }
})

export default TopBar