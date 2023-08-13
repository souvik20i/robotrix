import { useRouter, Stack } from "expo-router"
import { useSelector } from "react-redux"

import useModules from "../../hooks/use-modules"
import Module from "../../components/modules/Module"
import Container from "../../components/ui/Container"
import Scroll from "../../components/ui/Scroll"
import Button from "../../components/ui/Button"
import Space from "../../components/ui/Space"
import Loader from "../../components/ui/Loader"
import modulesInfo from "../../data/modulesInfo"

const Modules = () => {
    const router = useRouter()
    const { isLoading } = useModules()
    const { modules } = useSelector(state => state.module)

    return (<Container>
        <Stack.Screen options={{ title: 'Course Modules' }} />
        {isLoading ? <Loader /> :
            <>
                <Scroll>
                    {modules.map(({ name }, i) =>
                        <Module
                            key={i}
                            id={i}
                            name={name}
                            image={modulesInfo[i].image}
                        />)
                    }
                    <Space />
                </Scroll>
                <Button
                    label={'Certificate Progress'}
                    onPress={() => router.push('/certificate')}
                />
            </>
        }
    </Container>)
}

export default Modules