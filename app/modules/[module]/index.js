import { useRouter, useLocalSearchParams, Stack } from "expo-router"

import Container from "../../../components/ui/Container"
import Button from "../../../components/ui/Button"

const Module = () => {
    const router = useRouter()
    const { module } = useLocalSearchParams()
    return (<Container>
        <Stack.Screen options={{ title: `Module ${module}` }} />
        <Button label={'Topic 1'} onPress={() => router.push('/modules/1/1')} />
    </Container>)
}

export default Module