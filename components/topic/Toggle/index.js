import { View, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { topicActions } from "../../../store/topic-slice"

import Tab from "./Tab"
import colors from "../../../public/colors"

const Toggle = () => {
    const dispatch = useDispatch()
    const {
        isNotesActive, isResourcesActive, isAssessmentActive
    } = useSelector(state => state.topic)

    return (<View style={styles.bar}>
        <Tab
            label={'Notes'}
            onPress={() => dispatch(topicActions.activateNotes())}
            isActive={isNotesActive}
        />
        <Tab
            label={'Resources'}
            onPress={() => dispatch(topicActions.activateResources())}
            isActive={isResourcesActive}
        />
        <Tab
            label={'Assessment'}
            onPress={() => dispatch(topicActions.activateAssessment())}
            isActive={isAssessmentActive}
        />
    </View>)
}

const styles = StyleSheet.create({
    bar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.bgGrey,
        padding: 5,
        paddingBottom: 0
    }
})

export default Toggle