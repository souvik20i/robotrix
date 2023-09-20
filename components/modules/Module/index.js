import { Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useDispatch } from "react-redux"
import { FontAwesome } from "@expo/vector-icons"
import { moduleActions } from "../../../store/module-slice"
import { colors } from "../../../colors"

const Module = ({ id, name, image, isDone }) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const changeModuleHandler = () => {
        dispatch(moduleActions.changeCurrentModule(id))
        router.push(`/modules/${id}`)
    }

    return (<TouchableOpacity style={styles.module} onPress={changeModuleHandler}>
        <Text style={styles.header}>Module {id + 1}</Text>
        {isDone && <FontAwesome name="check-square-o" style={styles.checkmark} size={24} color={colors.success} />}
        <Image
            style={styles.image}
            source={{ uri: image }}
            resizeMode='contain'
        />
        <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    module: {
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        backgroundColor: colors.bgPrimary,
        elevation: 2
    },
    header: {
        color: colors.textDark,
        fontSize: 15,
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
        fontSize: 17,
        lineHeight: 30
    },
    checkmark: {
        position: 'absolute',
        right: '5%',
        top: '7%'
    }
})

export default Module