import { View, Text, Image, StyleSheet } from "react-native"

import colors from "../../../public/colors"

const Title = () => {
    return (<View style={styles.title}>
        <Image
            source={{ uri: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=957&q=80' }}
            style={styles.logo}
        />
        <Text style={styles.title}>ROBOTRIX</Text>
    </View>)
}

const styles = StyleSheet.create({
    title: {
        flex: 0.7,
    },
    logo: {
        height: 200
    },
    title: {
        color: colors.textLight,
        fontSize: 50,
        fontWeight: 'bold',
        padding: 20
    }
})

export default Title