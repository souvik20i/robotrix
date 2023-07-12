import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import colors from '../../public/colors';

const Select = ({ label, value, options, isValid, onChange }) => {
    return (<View style={styles.selction}>
        <Text style={styles.label}>{label}</Text>
        <View style={{
            ...styles.select,
            borderColor: isValid ? colors.bgGrey : 'red'
        }}>
            <Picker selectedValue={value} onValueChange={onChange}>
                <Picker.Item label='Select' value='' />
                {options.map(item => <Picker.Item key={item} label={item} value={item} />)}
            </Picker>
        </View >
    </View >)
}

const styles = StyleSheet.create({
    selction: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    select: {
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 10
    },
    label: {
        fontSize: 17,
        paddingVertical: 10,
        color: colors.textDark
    }
})

export default Select