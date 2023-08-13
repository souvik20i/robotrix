import { View, Text, Image, StyleSheet } from "react-native"

import colors from "../../../public/colors"

const Template = ({ isCompleted }) => {
    return (<View style={styles.block}>
        {isCompleted && <Text style={styles.annnot}>Download your certificate</Text>}
        <View style={styles.templateWrapper}>
            <Image
                source={require('../../../public/certificate.png')}
                style={styles.template}
            />
        </View>
        {!isCompleted && <Text style={{
            ...styles.annnot,
            fontSize: 20,
            padding: 50
        }}>Get a certificate of completion</Text>}
    </View >)
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
        textAlign: 'center',
        padding: 20,
        color: colors.textGrey
    }
})

export default Template