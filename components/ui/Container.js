import { View, StyleSheet, StatusBar } from "react-native"

const Container = ({ style, children }) => {
    return (<View style={{
        ...styles.container,
        ...style
    }}>{children}</View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: StatusBar.currentHeight
    }
})

export default Container