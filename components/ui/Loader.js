import { ActivityIndicator } from "react-native"

import colors from "../../public/colors"

const Loader = ({ color = colors.bgSecondary, raw = false }) => {
    return (<ActivityIndicator
        style={{
            padding: raw ? 0 : 20
        }}
        color={color}
        size={"large"}
    />)
}

export default Loader