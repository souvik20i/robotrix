import { View, Text, Modal, Pressable, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { feedbackActions } from "../../store/feedback-slice"
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import colors from "../../public/colors"

const Feedback = () => {
    const { isShown, message, success } = useSelector(state => state.feedback)
    const dispatch = useDispatch()
    const dismissHandler = () => {
        dispatch(feedbackActions.dismissFeedback())
    }

    return (<Modal transparent={true} visible={isShown} animationType='slide'>
        <Pressable style={styles.modal} onPress={dismissHandler}>
            <View style={styles.feedback}>
                <>
                    {success
                        ? <Ionicons name="shield-checkmark" size={50} color='green' />
                        : <FontAwesome name="warning" size={50} color='red' />
                    }
                    <Text style={styles.message}>{message}</Text>
                </>
            </View>
        </Pressable>
    </Modal >)
}

const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        zIndex: 10,
        width: '100%',
        height: '100%',
        backgroundColor: colors.textLight + '80',
        justifyContent: 'center',
        alignItems: 'center'
    },
    feedback: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.textLight,
        padding: 20,
        borderRadius: 10
    },
    message: {
        color: colors.textDark,
        textAlign: 'center',
        fontSize: 15,
        padding: 20
    }
})

export default Feedback