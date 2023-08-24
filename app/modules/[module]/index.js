import { usePathname, Stack } from "expo-router"
import { useSelector } from "react-redux"

import Topic from "../../../components/modules/Topic"
import FloatButton from "../../../components/modules/FloatButton"
import Container from "../../../components/ui/Container"
import Scroll from "../../../components/ui/Scroll"

const Module = () => {
    const pathname = usePathname()
    const { modules, currentModule } = useSelector(state => state.module)
    const { name, topics } = modules[currentModule]

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
        />
    </Container>)
}

export default Module