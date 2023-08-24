import { StyleSheet } from "react-native"
import Animated, { FadeInDown } from "react-native-reanimated"
import { colors } from "../../colors"

const Container = ({ style = {}, children }) => {
    return (<Animated.View
        entering={FadeInDown.delay(100)}
        style={{
            ...styles.container,
            ...style
        }}>
        {children}
    </Animated.View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bgPrimary
    }
})

export default Container