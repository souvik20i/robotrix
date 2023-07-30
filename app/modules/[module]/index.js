import { StyleSheet } from "react-native"
import { useRouter, Stack } from "expo-router"
import { useSelector } from "react-redux"

import Topic from "../../../components/modules/Topic"
import Container from "../../../components/ui/Container"
import Scroll from "../../../components/ui/Scroll"
import Button from "../../../components/ui/Button"
import Space from "../../../components/ui/Space"

const Module = () => {
    const router = useRouter()
    const { currentModule, topics } = useSelector(state => state.module)
    return (<Container>
        <Stack.Screen options={{ title: currentModule }} />
        <Scroll>
            {topics.map(({ id, title }) =>
                <Topic
                    key={id}
                    id={id}
                    title={title}
                />)
            }
            <Space />
        </Scroll>
        <Button label={'Test'} onPress={() => router.push('/modules/1/test')} dark />
    </Container>)
}

const styles = StyleSheet.create({
    test: {

    }
})

export default Module