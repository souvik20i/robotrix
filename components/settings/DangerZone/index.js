import { View, Text, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import { feedbackActions } from "../../../store/feedback-slice"
import { FontAwesome } from "@expo/vector-icons"
import { colors } from "../../../colors"

import Title from "../Title"
import Button from "../../ui/Button"

const DangerZone = () => {
    const dispatch = useDispatch()
    const deleteAccountHandler = () => {
        dispatch(feedbackActions.sendFeedback({
            success: false,
            isDeletionModal: true
        }))
    }

    return (<View>
        <Title
            label={'Danger Zone'}
            icon={<FontAwesome name="warning" size={20} color={colors.error} />}
        />
        <Text style={styles.annot}>Once you delete your account, there is no going back. Please be certain.</Text>
        <Button label={'Delete Account'}
            frameStyle={styles.deleteFrame}
            textStyle={styles.deleteText}
            onPress={deleteAccountHandler}
        />
    </View>)
}

const styles = StyleSheet.create({
    annot: {
        lineHeight: 20
    },
    deleteFrame: {
        backgroundColor: colors.error,
        borderRadius: 20,
        marginHorizontal: 0
    },
    deleteText: {
        paddingVertical: 10
    }
})

export default DangerZone