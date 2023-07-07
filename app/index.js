import { ImageBackground, StyleSheet } from "react-native";

import useAuthentication from "../hooks/use-authentication";

import Container from "../components/ui/Container"
import Title from "../components/home/Title";
import Auth from "../components/home/Auth";
import Button from "../components/ui/Button";

const Home = () => {
    const user = useAuthentication()
    return (<Container style={styles.container}>
        <ImageBackground
            source={require('../public/landingBg.jpg')}
            resizeMode='cover'
            style={styles.background}
        >
            <Title />
            {user ? <Button label={'Start Learning'} /> : <Auth />}
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
