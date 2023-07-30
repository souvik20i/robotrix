import { ScrollView, StyleSheet } from "react-native"

const Scroll = ({ style, children }) => {
    return (<ScrollView
        style={{
            ...styles.scroll,
            ...style
        }}
        showsVerticalScrollIndicator={false}
    >
        {children}
    </ScrollView>)
}

const styles = StyleSheet.create({
    scroll: {
        width: '100%',
        padding: 20
    }
})

export default Scroll