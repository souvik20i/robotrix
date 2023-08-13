import { Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useDispatch } from "react-redux"
import { moduleActions } from "../../../store/module-slice"

import colors from "../../../public/colors"

const Module = ({ id, name }) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const changeModuleHandler = () => {
        dispatch(moduleActions.changeCurrentModule(id))
        router.push(`/modules/${id}`)
    }

    return (<TouchableOpacity style={styles.module} onPress={changeModuleHandler}>
        <Text style={styles.header}>Module {id + 1}</Text>
        <Image
            style={styles.image}
            source={{ uri: 'https://images.unsplash.com/photo-1625633605176-7a8b6b491eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=786&q=80' }}
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
        fontSize: 17,
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
        fontSize: 20,
        lineHeight: 30
    }
})

export default Module