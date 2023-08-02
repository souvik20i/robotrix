import { View, Text, Modal, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { feedbackActions } from "../../store/feedback-slice"

import colors from "../../public/colors"

const Feedback = () => {
    const dispatch = useDispatch()
    const { isShown, message } = useSelector(state => state.feedback)
    const dismissHandler = () => {
        dispatch(feedbackActions.dismissFeedback())
    }

    return (<Modal transparent={true} visible={isShown}>
        <View style={styles.feedback}>
            <Text>{message}</Text>
            <Text onPress={dismissHandler}>Dismiss</Text>
        </View>
    </Modal>)
}

const styles = StyleSheet.create({
    feedback: {
        position: 'absolute',
        zIndex: 10,
        width: '100%',
        height: '100%',
        backgroundColor: colors.textDark + '80',
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        color: colors.textLight,
        textAlign: 'center',
        padding: 30
    }
})

export default Feedback