import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { moduleActions } from "../store/module-slice"
import { useGet, catchAsync } from "./use-http"

import Constants from "expo-constants"

const useModules = () => {
    const { token } = useSelector(state => state.auth)
    const { getRequest, isLoading } = useGet()
    const dispatch = useDispatch()
    const { domain } = Constants.expoConfig.extra

    useEffect(() => {
        (catchAsync(async () => {
            const modules = await getRequest(`${domain}/modules`, token)
            dispatch(moduleActions.changeModules(modules))
        }))()
    }, [])

    return { isLoading }
}

export default useModules