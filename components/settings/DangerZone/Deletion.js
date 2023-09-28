import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useNavigation } from "expo-router"
import { useDispatch, useSelector } from "react-redux"
import { feedbackActions } from "../../../store/feedback-slice"
import { useDelete, catchAsync } from "../../../hooks/use-http"
import { colors } from "../../../colors"

import AsyncStorage from "@react-native-async-storage/async-storage"
import ConfirmInput from "./ConfirmInput"
import Button from "../../ui/Button"
import Loader from "../../ui/Loader"

const Deletion = () => {
    const dispatch = useDispatch()
    const navigator = useNavigation()
    const { deleteRequest, isLoading } = useDelete()
    const [isConfirmed, setIsConfirmed] = useState()
    const { token, user } = useSelector(state => state.auth)
    const { email } = user

    const confirmationHandler = value => setIsConfirmed(value)

    const deletionHandler = catchAsync(async () => {
        if (!isConfirmed) return
        const { success, message } = await deleteRequest(email, token)
        if (success) {
            await AsyncStorage.removeItem('token')
            navigator.reset({ index: 0, routes: [{ name: 'index' }] })
        } else navigator.reset({ index: 0, routes: [{ name: 'index' }, { name: 'modules/index' }] })
        dispatch(feedbackActions.sendFeedback({ success, message }))
    })

    return (<View style={styles.deletion}>
        <Text style={styles.annot}>Do you really want to continue?</Text>
        <ConfirmInput email={email} onConfirm={confirmationHandler} />
        {isLoading ? <Loader /> :
            <Button
                label={'Delete my account'}
                frameStyle={{
                    ...styles.deleteFrame,
                    backgroundColor: isConfirmed ? colors.error : colors.bgGrey,
                }}
                textStyle={{
                    ...styles.deleteText,
                    color: isConfirmed ? colors.textLight : colors.error,
                }}
                onPress={deletionHandler}
            />
        }
    </View>)
}

const styles = StyleSheet.create({
    annot: {
        textAlign: 'center'
    },
    deletion: {
        width: '100%',
        marginTop: 30
    },
    deleteFrame: {
        borderRadius: 15,
        marginHorizontal: 0
    },
    deleteText: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingVertical: 10
    }
})

export default Deletion