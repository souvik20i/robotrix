import { ImageBackground, StyleSheet } from "react-native";

import Container from "../components/ui/Container"
import Title from "../components/home/Title";
import Auth from "../components/home/Auth";

const Home = () => {
    return (<Container style={styles.container}>
        <ImageBackground
            source={require('../public/landingBg.jpg')}
            resizeMode='cover'
            style={styles.background}
        >
            <Title />
            <Auth />
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
