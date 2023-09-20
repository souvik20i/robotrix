import { useState, useCallback } from "react"
import { usePathname, useFocusEffect, Stack } from "expo-router"
import { useSelector } from "react-redux"
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { useGet } from "../../../hooks/use-http"
import { colors } from "../../../colors"

import jwtDecode from "jwt-decode"
import Topic from "../../../components/modules/Topic"
import FloatButton from "../../../components/modules/FloatButton"
import Container from "../../../components/ui/Container"
import Scroll from "../../../components/ui/Scroll"
import Loader from "../../../components/ui/Loader"

const Module = () => {
    const pathname = usePathname()
    const { getRequest, isLoading } = useGet()
    const { token } = useSelector(state => state.auth)
    const { _id } = jwtDecode(token)
    const { modules, currentModule } = useSelector(state => state.module)
    const { name, topics } = modules[currentModule]
    const [progress, setProgress] = useState()
    const [isTestLocked, setIsTestLocked] = useState()
    const [hasTestPassed, setHasTestPassed] = useState()

    useFocusEffect(useCallback(() => {
        (async () => {
            const { progress } = await getRequest(`/progress/${_id}`, token)
            setProgress(progress)
            setIsTestLocked(!progress[`module${currentModule + 1}`][`topic${modules[currentModule].topics.length}`])
            setHasTestPassed(progress[`module${currentModule + 1}`]['quiz'])
        })().catch(console.error)
    }, []))

    return (<Container>
        <Stack.Screen options={{ title: name }} />
        {isLoading ? <Loader /> : <>
            <Scroll>
                {topics.map(({ id, title, video }) =>
                    <Topic
                        key={id}
                        id={id - 1}
                        title={title}
                        length={video.duration}
                        isLocked={(!currentModule && !(id - 1)) ? false : ((id - 1))
                            ? progress && !progress[`module${currentModule + 1}`][`topic${id - 1}`]
                            : progress && !progress[`module${currentModule}`][`topic${modules[currentModule - 1].topics.length}`]
                        }
                    />)
                }
            </Scroll>
            <FloatButton
                label={'Take Assessment'}
                href={`${pathname}/test`}
                resist={isTestLocked ? `Test your skills on '${modules[currentModule].name}' after completing the whole module` : null}
            >
                {isTestLocked && <FontAwesome5 name="lock" size={18} color={colors.textLight} />}
                {hasTestPassed && <Ionicons name="shield-checkmark" size={18} color={colors.textLight} />}
            </FloatButton>
        </>}
    </Container >)
}

export default Module