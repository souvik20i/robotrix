import { useState, useCallback } from "react"
import { usePathname, useFocusEffect, Stack } from "expo-router"
import { useSelector } from "react-redux"
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { colors } from "../../../colors"

import AsyncStorage from "@react-native-async-storage/async-storage"
import Topic from "../../../components/modules/Topic"
import FloatButton from "../../../components/modules/FloatButton"
import Container from "../../../components/ui/Container"
import Scroll from "../../../components/ui/Scroll"

const Module = () => {
    const pathname = usePathname()
    const { modules, currentModule } = useSelector(state => state.module)
    const { name, topics } = modules[currentModule]
    const [isEligible, setIsEligible] = useState()
    const [status, setStatus] = useState()

    useFocusEffect(useCallback(() => {
        (async () => {
            const isFinishedKey = `is-finished-${currentModule}-${modules[currentModule].topics.length - 1}`
            const isFinished = parseInt(await AsyncStorage.getItem(isFinishedKey) || 0)
            setIsEligible(isFinished)
            const statusKey = `has-passed-${currentModule}`
            const status = parseInt(await AsyncStorage.getItem(statusKey) || 0)
            setStatus(status)
        })().catch(console.error)
    }, []))

    return (<Container>
        <Stack.Screen options={{ title: name }} />
        <Scroll>
            {topics.map(({ id, title, video }) =>
                <Topic
                    key={id}
                    id={id - 1}
                    title={title}
                    length={video.duration}
                />)
            }
        </Scroll>
        <FloatButton
            label={'Take Assessment'}
            href={`${pathname}/test`}
            resist={!isEligible ? 'Complete the module to\ntake assessment' : null}
        >
            {!isEligible ? <FontAwesome5 name="lock" size={18} color={colors.textLight} /> :
                status === 1 ? <Ionicons name="shield-checkmark" size={18} color={colors.textLight} /> :
                    status === 2 ? <FontAwesome name="warning" size={18} color={colors.textLight} /> : null
            }
        </FloatButton>
    </Container >)
}

export default Module