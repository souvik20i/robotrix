import { ScrollView, StyleSheet } from "react-native"
import { useRouter, Stack } from "expo-router"

import Container from "../../components/ui/Container"
import Button from "../../components/ui/Button"
import Module from "../../components/modules/Module"
import modules from "../../data/modules"

const Modules = () => {
    const router = useRouter()
    return (<Container style={styles.container}>
        <Stack.Screen options={{ title: 'Course Modules' }} />
        <ScrollView style={styles.modules} showsVerticalScrollIndicator={false}>
            {modules.map(({ id, name }) =>
                <Module
                    key={id}
                    id={id}
                    name={name}
                    onPress={() => router.push(`/modules/${id}`)}
                />)
            }
            <Button label={'Find Your Certificate'} onPress={() => router.push('/certificate')} small />
        </ScrollView>
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly'
    },
    modules: {
        width: '100%',
        padding: 20
    }
})

export default Modules