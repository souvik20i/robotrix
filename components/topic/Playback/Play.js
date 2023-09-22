import { View, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from "react-native"
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { colors } from "../../../colors"

import Loader from "../../ui/Loader"

const Play = ({ isPlaying, isBuffering, isFinished, onToggle, onChange }) => {
    const playAgainHandler = () => onChange(0)
    return (<TouchableWithoutFeedback>
        {isFinished
            ?
            <TouchableOpacity onPress={playAgainHandler}>
                <MaterialIcons name="replay" size={40} color={colors.textLight} />
            </TouchableOpacity>
            :
            <View style={styles.middleBar}>
                <TouchableWithoutFeedback onPress={onToggle}>
                    {isBuffering ? <Loader color={colors.textLight} raw /> : isPlaying
                        ?
                        <FontAwesome name="pause" size={40} color={colors.textLight} />
                        :
                        <FontAwesome name="play" size={40} color={colors.textLight} />
                    }
                </TouchableWithoutFeedback>
            </View>
        }
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