import { Text, StyleSheet } from "react-native"

import Card from "../../ui/Card"
import Radio from "../../ui/Radio"

const Options = ({ labels }) => {
    return (<Card>
        <Text style={styles.header}>Choose the correct option</Text>
        {labels.map((label, i) => <Radio key={i} label={label} />)}
    </Card>)
}

const styles = StyleSheet.create({
    header: {
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Options