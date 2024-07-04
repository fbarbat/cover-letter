import { SpectacleThemeOverrides } from "spectacle"
import useWindowInnerSize from "./shared/useWindowInnerSize"

export const baseTheme: SpectacleThemeOverrides = {
    colors: {
        primary: '#FFFFFF',
        secondary: '#1F2022',
        tertiary: '#03A9FC',
        quaternary: '#CECECE'
    },
    fonts: {
        header: 'Montserrat',
        text: 'Helvetica'
    }
}

export default function useFullWindowTheme() {
    const size = useWindowInnerSize()

    const fullWindowTheme = {
        ...baseTheme,
        size: {
            width: size.width,
            height: size.height
        }
    }

    return fullWindowTheme
}
