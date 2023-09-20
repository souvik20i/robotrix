import { useState, useCallback } from "react"
import { Stack, useFocusEffect } from "expo-router"
import { useSelector } from "react-redux"
import { useGet } from "../../hooks/use-http"

import jwtDecode from "jwt-decode"
import useModules from "../../hooks/use-modules"
import Module from "../../components/modules/Module"
import FloatButton from "../../components/modules/FloatButton"
import Container from "../../components/ui/Container"
import Scroll from "../../components/ui/Scroll"
import Loader from "../../components/ui/Loader"

const Modules = () => {
    const { isLoading } = useModules()
    const { modules } = useSelector(state => state.module)
    const { getRequest } = useGet()
    const { token } = useSelector(state => state.auth)
    const { _id } = jwtDecode(token)
    const [progress, setProgress] = useState()

    useFocusEffect(useCallback(() => {
        (async () => {
            const { progress } = await getRequest(`/progress/${_id}`, token)
            setProgress(progress)
        })().catch(console.error)
    }, []))

    return (<Container>
        <Stack.Screen options={{ title: 'Course Modules' }} />
        {isLoading ? <Loader /> :
            <>
                <Scroll>
                    {modules.map(({ id, name, image }) =>
                        <Module
                            key={id}
                            id={id - 1}
                            name={name}
                            image={image}
                            isDone={progress && progress[`module${id}`]['quiz']}
                        />)
                    }
                </Scroll>
                <FloatButton
                    label={'Certificate Progress'}
                    href={'/certificate'}
                />
            </>
        }
    </Container>)
}

export default Modules