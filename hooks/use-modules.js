import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { moduleActions } from "../store/module-slice"
import { useGet, catchAsync } from "./use-http"

const useModules = () => {
    const { token } = useSelector(state => state.auth)
    const { modules: persistedModules } = useSelector(state => state.module)
    const { getRequest, isLoading } = useGet()
    const dispatch = useDispatch()

    useEffect(() => {
        (catchAsync(async () => {
            if (persistedModules.length) return
            const modules = await getRequest('/modules', token)
            dispatch(moduleActions.changeModules(modules))
        }))()
    }, [])

    return { isLoading }
}

export default useModules