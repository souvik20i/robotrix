import { useRouter, Stack } from "expo-router"

import Container from "../../components/ui/Container"
import Button from "../../components/ui/Button"

const Modules = () => {
    const router = useRouter()
    return (<Container>
        <Stack.Screen options={{ title: 'Course Modules' }} />
        <Button label={'Module 1'} onPress={() => router.push('/modules/1')} />
    </Container>)
}

export default Modules