import { View, Text, StyleSheet } from "react-native"

import colors from "../../../public/colors"

const Resources = () => {
    return (<View style={styles.resources}>
        <View style={styles.header}>
            <View style={styles.tab}>
                <Text style={styles.label}>Resources</Text>
            </View>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    resources: {
        width: '100%'
    },
    header: {
        backgroundColor: colors.bgGrey,
        paddingHorizontal: 30,
        paddingTop: 10,
        paddingBottom: 0
    },
    tab: {
        backgroundColor: colors.bgPrimary,
        padding: 20
    },
    label: {
        fontSize: 20,
        textAlign: 'center'
    }
})

export default Resources