import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { moduleActions } from "../store/module-slice"
import { useGet, catchAsync } from "./use-http"
import { DOMAIN } from "../domain"

const useModules = () => {
    const { token } = useSelector(state => state.auth)
    const { getRequest, isLoading } = useGet()
    const dispatch = useDispatch()

    useEffect(() => {
        (catchAsync(async () => {
            const modules = await getRequest(`${DOMAIN}/modules`, token)
            dispatch(moduleActions.changeModules(modules))
        }))()
    }, [])

    return { isLoading }
}

export default useModules