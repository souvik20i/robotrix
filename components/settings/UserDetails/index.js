import { View, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "../../../colors"

import Title from "../Title"
import Field from "./Field"

const UserDetails = () => {
    const { user } = useSelector(state => state.auth)
    const { name, email, phone, enrollmentno } = user

    return (<View>
        <Title
            label={'Your Account'}
            icon={<Ionicons name="person" size={20} color={colors.textGrey + '90'} />}
        />
        <View style={styles.fields}>
            {user && <>
                <Field label={'Name'} data={name} />
                <Field label={'Email'} data={email} />
                <Field label={'Phone'} data={phone} />
                <Field label={'Enrollment No'} data={enrollmentno} />
            </>}
        </View>
    </View>)
}

const styles = StyleSheet.create({
    fields: {
        alignItems: 'center'
    }
})

export default UserDetails