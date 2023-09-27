import { View } from "react-native"
import { useSelector } from "react-redux"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "../../../colors"

import Title from "../Title"
import Field from "./Field"

const UserDetails = () => {
    const { user } = useSelector(state => state.auth)
    return (<View>
        <Title
            label={'Your Account'}
            icon={<Ionicons name="person" size={20} color={colors.textGrey + '90'} />}
        />
        {user && <>
            <Field label={'Name'} data={user.name} />
            <Field label={'Email'} data={user.email} />
            <Field label={'Phone'} data={user.phone} />
            <Field label={'Enrollment No'} data={user.enrollmentno} />
        </>}
    </View>)
}

export default UserDetails