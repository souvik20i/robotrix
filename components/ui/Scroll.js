import { View, ScrollView, StyleSheet } from "react-native"

const Scroll = ({ style, space = 150, children }) => {
    return (<ScrollView
        style={{
            ...styles.scroll,
            ...style
        }}
        showsVerticalScrollIndicator={false}
    >
        {children}
        <View style={{ height: space }} />
    </ScrollView>)
}

const styles = StyleSheet.create({
    scroll: {
        width: '100%',
        padding: 20
    }
})

export default Scroll