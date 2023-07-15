import { View, TouchableWithoutFeedback, StyleSheet } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

import colors from "../../../public/colors"

const Controls = ({ isActive, isPlaying, onPress, onChange }) => {
    return (<>{isActive &&
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.controls}>
                <TouchableWithoutFeedback onPress={onChange}>
                    {isPlaying
                        ?
                        <FontAwesome name="pause" size={40} color={colors.textLight} />
                        :
                        <FontAwesome name="play" size={40} color={colors.textLight} />
                    }
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    }</>)
}

const styles = StyleSheet.create({
    controls: {
        position: 'absolute',
        height: '25%',
        width: '100%',
        backgroundColor: colors.textDark + '80',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Controls