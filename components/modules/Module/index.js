import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import colors from "../../../public/colors"

const Module = ({ id, name, onPress = () => { } }) => {
    return (<TouchableOpacity style={styles.module} onPress={onPress}>
        <Text style={styles.header}>Module {id}</Text>
        <Image
            style={styles.image}
            source={require('../../../public/module.jpg')}
            resizeMode='contain'
        />
        <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    module: {
        backgroundColor: colors.bgPrimary,
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        elevation: 5
    },
    header: {
        color: colors.textDark,
        fontSize: 20,
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: 200,
        marginVertical: 15,
        borderRadius: 10
    },
    title: {
        color: colors.textDark,
        fontSize: 20
    }
})

export default Module