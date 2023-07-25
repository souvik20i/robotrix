import { useState, useEffect } from "react"
import { ImageBackground, StyleSheet } from "react-native"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { Stack } from "expo-router"

import Container from "../components/ui/Container"
import Title from "../components/home/Title"
import Auth from "../components/home/Auth"
import Start from "../components/home/Start"

const auth = getAuth()

const Home = () => {
    const [user, setUser] = useState()
    useEffect(() => onAuthStateChanged(auth, user => setUser(user)), [])

    return (<Container>
        <Stack.Screen options={{ headerShown: false }} />
        <ImageBackground
            source={require('../public/bgHome.jpg')}
            resizeMode='cover'
            style={styles.background}
        >
            <Title />
            {user ? <Start /> : <Auth />}
        </ImageBackground>
    </Container>);
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home