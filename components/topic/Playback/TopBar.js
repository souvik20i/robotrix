import { TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../../../public/colors';

const TopBar = () => {
    return (<TouchableWithoutFeedback>
        <TouchableOpacity style={styles.topBar}>
            <Entypo name="dots-three-vertical" size={24} color={colors.textLight} />
        </TouchableOpacity>
    </TouchableWithoutFeedback>)
}

const styles = StyleSheet.create({
    topBar: {
        width: '100%',
        alignItems: 'flex-end'
    }
})

export default TopBar