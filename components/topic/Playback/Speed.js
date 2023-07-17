import { View, Text, Modal, TouchableWithoutFeedback, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons'

import colors from "../../../public/colors"

const Speed = ({ isActive, current, rates, onChange, onToggle }) => {
    const rateChangeHandler = rate => {
        onChange(rate)
        onToggle()
    }
    return (<Modal
        visible={isActive}
        transparent={true}
        animationType='fade'>
        <TouchableWithoutFeedback onPress={onToggle}>
            <View style={styles.modal}>
                <TouchableWithoutFeedback>
                    <View style={styles.rates}>
                        <Text style={styles.rateHeader}>Playback Speed</Text>
                        {rates.map((rate, i) =>
                            <View key={i} style={styles.rate}>
                                <Text style={styles.rateText} onPress={rateChangeHandler.bind(null, rate)}>
                                    {rate === 1 ? 'Normal' : `${rate}x`}
                                </Text>
                                {rate === current && <Feather name="check" size={24} color={colors.bgSecondary} />}
                            </View>
                        )}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    </Modal>)
}

const styles = StyleSheet.create({
    modal: {
        height: '100%',
        backgroundColor: colors.textDark + '80',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rates: {
        width: '90%',
        backgroundColor: colors.bgPrimary,
        padding: 20
    },
    rateHeader: {
        fontSize: 30,
        paddingBottom: 20
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rateText: {
        fontSize: 20,
        padding: 10
    }
})

export default Speed