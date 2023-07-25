import { View, Text, Image, StyleSheet } from "react-native"

import colors from "../../../public/colors"

const Template = () => {
    return (<View style={styles.block}>
        <Text style={styles.annnot}>You will get a certificate like this</Text>
        <View style={styles.templateWrapper}>
            <Image
                source={require('../../../public/certificate.png')}
                style={styles.template}
            />
        </View>
    </View>)
}

const styles = StyleSheet.create({
    block: {
        alignItems: 'center'
    },
    template: {
        width: 300,
        height: 200,
    },
    templateWrapper: {
        backgroundColor: colors.bgPrimary,
        elevation: 3
    },
    annnot: {
        fontSize: 15,
        paddingBottom: 25,
        color: colors.textGrey
    }
})

export default Template