import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        brand: {
            "black": "#1F1F1F",
            "white": "#FFFFFF",
            "darkBlue": "#22165C",
            "darkerPurple": "#38325C",
            "darkPurple": "#3D28A7",
            "lightPurple": "#8A79E1",
            "lightYellow": "#FFF280",
            "lightGray": "#F6F6F6"

        }
    },
    initalColorMode: 'light',
    useSystemColorMode: false
})


export default theme