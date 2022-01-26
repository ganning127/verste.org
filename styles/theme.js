import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        brand: {
            "black": "#15162A",
            "white": "#FAFAFF",
            "gold": "#FFC020",
            "gray": "#30343F",
            "blue": "#6D73A1",
            "blue.med": "#373E70",
            "blue.dark": "#1D2559",
            "blue.deep": "#000840",
            "blue.light": "#bdc3f0"

        }
    },
    initalColorMode: 'light',
    useSystemColorMode: false
})


export default theme