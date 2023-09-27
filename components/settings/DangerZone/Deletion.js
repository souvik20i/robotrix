import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { feedbackActions } from "../../../store/feedback-slice"
import { authActions } from "../../../store/auth-slice"
import { useDelete } from "../../../hooks/use-http"
import { colors } from "../../../colors"

import AsyncStorage from "@react-native-async-storage/async-storage"
import ConfirmInput from "./ConfirmInput"
import Button from "../../ui/Button"
import Loader from "../../ui/Loader"

const Deletion = () => {
    const dispatch = useDispatch()
    const { deleteRequest, isLoading } = useDelete()
    const [isConfirmed, setIsConfirmed] = useState()
    const { token, user } = useSelector(state => state.auth)
    const confirmationHandler = value => setIsConfirmed(value)

    const deletionHandler = async () => {
        if (!isConfirmed) return
        await deleteRequest(`/delete/${user._id}`, token, '/modules')
        dispatch(feedbackActions.dismissFeedback())
        await AsyncStorage.removeItem('token')
        dispatch(authActions.clearToken())
    }

    return (<View style={styles.deletion}>
        <Text style={styles.annot}>Do you really want to continue?</Text>
        <ConfirmInput user={user} onConfirm={confirmationHandler} />
        {isLoading ? <Loader /> :
            <Button
                label={'Delete my account'}
                frameStyle={{
                    ...styles.deleteFrame,
                    backgroundColor: isConfirmed ? colors.error : colors.bgGrey,
                    borderWidth: isConfirmed ? 0 : 1,
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
        marginTop: 30
    },
    deleteFrame: {
        borderColor: colors.textGrey,
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