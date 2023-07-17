import { View, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from "react-native"
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import Loader from "../../ui/Loader"
import colors from "../../../public/colors";

const Play = ({ isPlaying, isBuffering, current, length, onToggle, onChange }) => {
    const replayHandler = () => onChange(Math.max(current - 10000, 0))
    const forwardHandler = () => onChange(Math.min(current + 10000, length))

    return (<TouchableWithoutFeedback>
        <View style={styles.middleBar}>
            <TouchableOpacity onPress={replayHandler}>
                <MaterialIcons name="replay-10" size={40} color={colors.textLight} />
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={onToggle}>
                {isPlaying ?
                    <FontAwesome name="pause" size={40} color={colors.textLight} />
                    : isBuffering ? <Loader color={colors.textLight} raw /> :
                    <FontAwesome name="play" size={40} color={colors.textLight} />
                }
            </TouchableWithoutFeedback>
            <TouchableOpacity onPress={forwardHandler}>
                <MaterialIcons name="forward-10" size={40} color={colors.textLight} />
            </TouchableOpacity>
        </View>
    </TouchableWithoutFeedback>)
}

const styles = StyleSheet.create({
    middleBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})

export default Play