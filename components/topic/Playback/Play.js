import { TouchableWithoutFeedback } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

import Loader from "../../ui/Loader"
import colors from "../../../public/colors";

const Play = ({ isPlaying, isBuffering, onPress }) => {
    return (<TouchableWithoutFeedback onPress={onPress}>
        {isPlaying ?
            <FontAwesome name="pause" size={40} color={colors.textLight} />
            : isBuffering ? <Loader color={colors.textLight} /> :
            <FontAwesome name="play" size={40} color={colors.textLight} />
        }
    </TouchableWithoutFeedback>)
}

export default Play