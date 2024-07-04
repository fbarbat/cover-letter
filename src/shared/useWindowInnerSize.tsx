import { useCallback, useEffect, useState } from "react"

export default function useWindowInnerSize() {
    const [size, setSize] = useState(createSize())

    const resizeListener = useCallback(() => {
        setSize(createSize())
    }, [])

    useEffect(() => {
        window.addEventListener("resize", resizeListener)

        return () => {
            window.removeEventListener("resize", resizeListener)
        }
    }, [resizeListener])

    return size
}

function createSize() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}
