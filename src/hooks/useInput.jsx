import { useState } from "react"

const useInput = () => {
    const [value, setValue] = useState("")

    const handleChange = (value) => setValue(value)

    return [value, handleChange]
}

export default useInput
