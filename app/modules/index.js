import { Stack } from "expo-router"
import { useSelector } from "react-redux"

import useModules from "../../hooks/use-modules"
import Module from "../../components/modules/Module"
import FloatButton from "../../components/modules/FloatButton"
import Container from "../../components/ui/Container"
import Scroll from "../../components/ui/Scroll"
import Loader from "../../components/ui/Loader"

const Modules = () => {
    const { isLoading } = useModules()
    const { modules } = useSelector(state => state.module)

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