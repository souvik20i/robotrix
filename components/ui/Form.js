import { ScrollView, StyleSheet } from "react-native"

import Input from "./Input"
import Select from "./Select"

const Form = ({ labels, handlers, validity, options }) => {
    return (<ScrollView style={styles.form}>
        {labels.map((label, i) => (i < 5)
            ?
            <Input
                key={i}
                label={label}
                onChange={handlers[i]}
                isValid={validity[i]}
                secured={label === 'Password'}
            />
            :
            <Select
                key={i}
                label={label}
                value={options[label].current}
                options={options[label].items}
                onChange={handlers[i]}
                isValid={validity[i]}
            />
        )}
    </ScrollView>)
}

const styles = StyleSheet.create({
    form: {
        width: '100%'
    }
})

export default Form