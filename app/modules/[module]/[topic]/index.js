import { StyleSheet } from "react-native"
import { useLocalSearchParams, Stack } from "expo-router"

import Container from "../../../../components/ui/Container"
import Playback from "../../../../components/topic/Playback"
import Resources from "../../../../components/topic/Resources"

const Topic = () => {
    const { topic } = useLocalSearchParams()

    return (<Container style={styles.container}>
        <Stack.Screen options={{ title: `Topic ${topic}` }} />
        {/* <Playback uri={'https://res.cloudinary.com/duejtqqkp/video/upload/v1689328132/endgame_g8zr1e.mp4'} /> */}
        <Playback uri={require('../../../../public/endgame.mp4')} />
        <Resources />
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start'
    }
})

export default Topic