import { Stack } from "expo-router"

import Container from "../../components/ui/Container"
import Progress from "../../components/certificate/Progress"
import Template from "../../components/certificate/Template"

const Certificate = () => {
    return (<Container>
        <Stack.Screen options={{ title: 'Course Certificate' }} />
        <Progress completed={5} expected={32} />
        <Template name={'Souvik Sarkar'} course={'Robotics'} date={'20 July 2023'} />
    </Container>)
}

export default Certificate