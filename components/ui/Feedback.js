import { View, Text, Modal, Pressable, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { feedbackActions } from "../../store/feedback-slice"
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { colors } from "../../colors"

import Deletion from "../settings/DangerZone/Deletion"

const Feedback = () => {
    const { isShown, message, success, isDeletionModal } = useSelector(state => state.feedback)
    const dispatch = useDispatch()
    const dismissHandler = () => {
        dispatch(feedbackActions.dismissFeedback())
    }

    return (<Modal transparent={!isDeletionModal} visible={isShown} animationType='slide' onRequestClose={dismissHandler}>
        <Pressable style={styles.modal} onPress={dismissHandler}>
            <View style={styles.feedback}>
                <>
                    {success
                        ? <Ionicons name="shield-checkmark" size={50} color={colors.success} />
                        : <FontAwesome name="warning" size={50} color={colors.error} />
                    }
                    {isDeletionModal
                        ? <Deletion />
                        : <Text style={styles.message}>{message}</Text>}
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    feedback: {
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.textLight,
        padding: 20,
        borderRadius: 10,
        elevation: 5
    },
    message: {
        color: colors.textDark,
        textAlign: 'center',
        fontSize: 15,
        padding: 20,
        lineHeight: 25
    }
})

export default Feedback