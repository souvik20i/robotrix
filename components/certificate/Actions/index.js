import { printToFileAsync } from "expo-print"
// import { downloadAsync, documentDirectory } from "expo-file-system"
import { shareAsync } from "expo-sharing"
import { AntDesign } from "@expo/vector-icons"

import useTemplate from "../../../hooks/use-template"
import Button from "../../ui/Button"
import colors from "../../../public/colors"

const Actions = ({ name }) => {
    const html = useTemplate(name)
    const generatePdf = async (html) => {
        const { uri } = await printToFileAsync({ html, height: 710, width: 1000 })
        // const { uri } = await downloadAsync(cachedUri, documentDirectory + `${name} Robotics Certification.pdf`)
        await shareAsync(uri)
    }
    const downloadCertificate = () => {
        generatePdf(html).catch(err => console.log(err))
    }
    return (<Button
        label={<AntDesign name="download" size={30} color={colors.textLight} />}
        onPress={downloadCertificate} dark small
    />)
}

export default Actions