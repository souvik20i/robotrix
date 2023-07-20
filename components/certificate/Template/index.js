import { View } from "react-native"

import * as Print from "expo-print"
import * as MediaLibrary from "expo-media-library"
import Button from "../../ui/Button"

const Template = () => {

    const createAndSavePdf = async (html) => {
        const { uri } = Print.printToFileAsync({ html })
        const permit = await MediaLibrary.requestPermissionsAsync()
        if (permit.granted) await MediaLibrary.createAssetAsync(uri)
    }

    const downloadCertificate = () => {
        createAndSavePdf().catch(err => console.log(err))
    }

    return (<View>
        <Button label={'Template'} onPress={() => { }} />
        <Button label={'Download'} onPress={downloadCertificate} />
    </View>)
}

export default Template