import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { useRouter, usePathname } from "expo-router"
import { useDispatch } from "react-redux"
import { moduleActions } from "../../../store/module-slice"

import colors from "../../../public/colors"

const Topic = ({ id, title }) => {
    const router = useRouter()
    const pathname = usePathname()
    const dispatch = useDispatch()

    const changeTopicHandler = () => {
        dispatch(moduleActions.changeCurrentTopic(title))
        router.push(`${pathname}/${id}`)
    }

    return (<TouchableOpacity style={styles.topic} onPress={changeTopicHandler}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity >)
}

const styles = StyleSheet.create({
    topic: {
        backgroundColor: colors.bgGrey,
        padding: 20,
        margin: 10,
        borderRadius: 10,
        elevation: 1
    },
    title: {
        color: colors.textDark,
        fontSize: 15,
        lineHeight: 30
    }
})

export default Topic