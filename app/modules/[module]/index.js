import { useRouter, usePathname, Stack } from "expo-router"
import { useSelector } from "react-redux"

import Topic from "../../../components/modules/Topic"
import Container from "../../../components/ui/Container"
import Scroll from "../../../components/ui/Scroll"
import Button from "../../../components/ui/Button"
import Space from "../../../components/ui/Space"

const Module = () => {
    const router = useRouter()
    const pathname = usePathname()
    const { modules, currentModule } = useSelector(state => state.module)
    const { name, topics } = modules[currentModule]
    return (<Container>
        <Stack.Screen options={{ title: name }} />
        <Scroll>
            {topics.map(({ title }, i) =>
                <Topic
                    key={i}
                    id={i}
                    title={title}
                />)
            }
            <Space />
        </Scroll>
        <Button
            label={'Take Assessment'}
            onPress={() => router.push(`${pathname}/test`)}
        />
    </Container>)
}

export default Module