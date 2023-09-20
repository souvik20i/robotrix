import { View, Text, Image, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const Template = ({ user = '', isCompleted }) => {
    const firstname = user.split(' ')[0]
    return (<View style={styles.block}>
        {isCompleted && <>
            <Text style={styles.annnot}>{firstname}, You Finally Did It!</Text>
            <Text style={styles.annnot}>Download Your Achievement</Text>
        </>}
        <View style={styles.templateWrapper}>
            <Image
                source={require('../../../public/certificate.png')}
                style={styles.template}
            />
        </View>
        {!isCompleted && <>
            <Text style={styles.annnot}>{firstname}, unlock your certificate</Text>
            <Text style={styles.annnot}>by completing the full course</Text>
        </>}
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
        marginVertical: 30,
        elevation: 3,
        shadowColor: colors.textDark,
        shadowOffset: {
            height: 0.3,
            width: 0.3
        },
        shadowOpacity: 0.2,
        shadowRadius: 0.2
    },
    annnot: {
        fontSize: 15,
        textAlign: 'center',
        paddingBottom: 10,
        color: colors.textDark
    }
})

export default Template