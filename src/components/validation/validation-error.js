import { useCallback } from "react"
import { useSelector } from "react-redux"
import {TbFaceIdError} from 'react-icons/tb'

const ValidationError = () => {

    const {error} = useSelector(state => state.auth)
    const errorMessage = useCallback(() => {
        return Object.keys(error).map(desc => {
            const msg = error[desc].join(', ')
            return `${msg}`
        })
    }, [error])
    console.log(error)


  return (
    error !== null && 
        errorMessage().map((err, idx) => (
        <div key={idx} className="flex items-center gap-3 px-4 py-4 bg-red-100/30 border border-red-300 rounded-md mb-3">
            <TbFaceIdError className="text-2xl text-red-700"/>
            <p className="text-red-700">{err}</p>
        </div>
            
        ))
    )
}

export default ValidationError
