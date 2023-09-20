import { View, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useDispatch } from "react-redux"
import { feedbackActions } from "../../../store/feedback-slice"
import { colors } from "../../../colors"

import Button from "../../ui/Button"

const FloatButton = ({ label, href, resist, children }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const pressHandler = () => {
        if (resist) dispatch(feedbackActions.sendFeedback({
            message: resist,
            success: false
        }))
        else router.push(href)
    }

    return (<View style={styles.button}>
        <Button
            label={label}
            onPress={pressHandler}
            frameStyle={styles.frame}
            textStyle={styles.text}
        >
            {children}
        </Button>
    </View>)
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: colors.bgGrey + '60',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 30
    },
    frame: {
        marginHorizontal: '15%',
        marginVertical: '5%'
    },
    text: {
        paddingHorizontal: '10%',
        paddingVertical: '5%',
    }
})

export default FloatButton