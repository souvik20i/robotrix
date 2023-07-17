import { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import Speed from './Speed';
import colors from '../../../public/colors';

const TopBar = ({ rate, onChangeRate }) => {
    const [isSpeedActive, setIsSpeedActive] = useState(false)
    const toggleSpeedBox = () => setIsSpeedActive(value => !value)
    const rates = [1, 1.25, 1.5, 1.75, 2]

    return (<TouchableWithoutFeedback>
        <View style={styles.topBar}>
            <TouchableOpacity onPress={toggleSpeedBox}>
                <Text style={styles.rate}>{(rate == 1 ? 'Normal' : `${rate}x`)}</Text>
            </TouchableOpacity>
            <Speed
                isActive={isSpeedActive}
                current={rate}
                rates={rates}
                onChange={onChangeRate}
                onToggle={toggleSpeedBox}
            />
            <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={24} color={colors.textLight} />
            </TouchableOpacity>
        </View>
    </TouchableWithoutFeedback>)
}

const styles = StyleSheet.create({
    topBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    rate: {
        color: colors.textLight,
        paddingHorizontal: 20
    }
})

export default TopBar