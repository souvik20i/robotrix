import { ImageBackground, StyleSheet } from "react-native";
import { Stack } from "expo-router";

import useAuth from "../hooks/use-auth";

import Container from "../components/ui/Container"
import Title from "../components/home/Title";
import Auth from "../components/home/Auth";
import Start from "../components/home/Start";

const Home = () => {
    const user = useAuth()
    return (<Container style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <ImageBackground
            source={require('../public/landingBg.jpg')}
            resizeMode='cover'
            style={styles.background}
        >
            <Title />
            {user ? <Start /> : <Auth />}
        </ImageBackground>
    </Container>);
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 0
    },
    background: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home
