import { StyleSheet } from "react-native"
import { useRouter, useLocalSearchParams, Stack } from "expo-router"

import Container from "../../../../components/ui/Container"
import Button from "../../../../components/ui/Button"
import Playback from "../../../../components/topic/Playback"
import Toggle from "../../../../components/topic/Toggle"

const Topic = () => {
    const router = useRouter()
    const { topic } = useLocalSearchParams()

    return (<Container style={styles.container}>
        <Stack.Screen options={{ title: `Topic ${topic}` }} />
        {/* <Playback uri={'https://res.cloudinary.com/duejtqqkp/video/upload/v1689328132/endgame_g8zr1e.mp4'} /> */}
        <Playback uri={require('../../../../public/endgame.mp4')} />
        <Toggle />
        <Button
            label={'Test'}
            onPress={() => router.push('/modules/1/1/test')}
        />
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start'
    }
})

export default Topic