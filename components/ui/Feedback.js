import { View, Text, Modal, Pressable, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { feedbackActions } from "../../store/feedback-slice"
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import colors from "../../public/colors"

const Feedback = () => {
    const { isShown, message, status } = useSelector(state => state.feedback)
    const dispatch = useDispatch()
    const dismissHandler = () => {
        dispatch(feedbackActions.dismissFeedback())
    }

    return (<Modal transparent={true} visible={isShown} animationType='slide'>
        <Pressable style={styles.modal} onPress={dismissHandler}>
            <View style={styles.feedback}>
                <>
                    {status === 'error'
                        ? <FontAwesome name="warning" size={50} color='red' />
                        : <Ionicons name="shield-checkmark" size={50} color='green' />
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
        backgroundColor: colors.textLight + 'cc',
        padding: 20,
        borderRadius: 10
    },
    message: {
        color: colors.textDark,
        textAlign: 'center',
        fontSize: 20,
        padding: 20
    }
})

export default Feedback