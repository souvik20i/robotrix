import { useState, useEffect } from "react"
import { Text, StyleSheet } from "react-native"

import Animated, { SlideInUp, SlideOutDown } from "react-native-reanimated"
import colors from "../../public/colors"

const Feedback = ({ message, success }) => {
    const [show, setShow] = useState(true)
    useEffect(() => {
        setTimeout(() => setShow(false), 2000)
    }, [])

    return (<>
        {show &&
            <Animated.View
                style={{
                    ...styles.feedback,
                    backgroundColor: success ? 'green' : 'red'
                }}
                entering={SlideInUp}
                exiting={SlideOutDown}
            >
                <Text style={styles.message}>{message}</Text>
            </Animated.View>
        }
    </>)
}

const styles = StyleSheet.create({
    feedback: {
        width: '100%',
        position: 'absolute',
        zIndex: 10,
        bottom: 80
    },
    message: {
        color: colors.textLight,
        textAlign: 'center',
        padding: 30
    }
})

export default Feedback