import { ScrollView, StyleSheet } from "react-native"

import Input from "./Input"

const Form = ({ labels, handlers, validity }) => {
    return (<ScrollView style={styles.form}>
        {labels.map((label, i) =>
            <Input
                key={i}
                label={label}
                onChange={handlers[i]}
                isValid={validity[i]}
                secured={i == 1}
            />)
        }
    </ScrollView>)
}

const styles = StyleSheet.create({
    form: {
        width: '100%'
    }
})

export default Form