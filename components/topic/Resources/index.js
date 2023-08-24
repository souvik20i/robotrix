import { View, ScrollView, Text, StyleSheet } from "react-native"
import { colors } from "../../../colors"

import Space from "../../ui/Space"

const Resources = ({ content }) => {
    return (<View style={styles.resources}>
        <View style={styles.header}>
            <View style={styles.tab}>
                <Text style={styles.label}>Resources</Text>
            </View>
        </View>
        <ScrollView style={styles.content}>
            <Text >{content}</Text>
            <Space height={400}/>
        </ScrollView>
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
    },
    content: {
        padding: 20
    }
})

export default Resources