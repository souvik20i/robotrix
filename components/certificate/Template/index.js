import { View } from "react-native"
import { printToFileAsync } from "expo-print"
import { shareAsync } from "expo-sharing"

import useTemplate from "../../../hooks/use-template"
import Button from "../../ui/Button"

const Template = (props) => {
    const html = useTemplate(props)
    const createAndSavePdf = async (html) => {
        const { uri } = await printToFileAsync({ html })
        await shareAsync(uri)
    }
    const downloadCertificate = () => {
        createAndSavePdf(html).catch(err => console.log(err))
    }

    return (<View>
        <Button label={'Template'} onPress={() => { }} />
        <Button label={'Download'} onPress={downloadCertificate} />
    </View>)
}

export default Template