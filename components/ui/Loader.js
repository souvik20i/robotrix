import { ActivityIndicator, StyleSheet } from "react-native"
import colors from "../../public/colors"

const Loader = () => {
    return (<ActivityIndicator
        style={styles.loader}
        color={colors.bgSecondary}
        size={"large"}
    />)
}

const styles = StyleSheet.create({
    loader: {
        padding: 20
    }
})

export default Loader