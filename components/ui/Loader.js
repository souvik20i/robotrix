import { ActivityIndicator, StyleSheet } from "react-native"

import colors from "../../public/colors"

const Loader = ({ color = colors.bgSecondary }) => {
    return (<ActivityIndicator
        style={styles.loader}
        color={color}
        size={"large"}
    />)
}

const styles = StyleSheet.create({
    loader: {
        padding: 20
    }
})

export default Loader