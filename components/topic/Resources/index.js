import { View, Text, StyleSheet } from "react-native"
import { colors } from "../../../colors"

import Scroll from "../../ui/Scroll"

const Resources = ({ content }) => {
    return (<View style={styles.resources}>
        <View style={styles.header}>
            <View style={styles.tab}>
                <Text style={styles.label}>Resources</Text>
            </View>
        </View>
        <Scroll style={styles.content} space={400}>
            <Text >{content}</Text>
        </Scroll>
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