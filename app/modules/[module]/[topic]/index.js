import { useRouter } from "expo-router"

import Container from "../../../../components/ui/Container"
import Button from "../../../../components/ui/Button"

const Topic = () => {
    const router = useRouter()
    return (<Container>
        <Button label={'Test'} onPress={() => router.push('/modules/1/1/test')} />
    </Container>)
}
export default Topic