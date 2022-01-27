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
        },
        brandLight: {
            "black": "#15162A",
            "white": "#FAFAFF",
            "gray": "#30343F",
            "blue": "#2A80C2",
            "caroBlue": "#5E9FD2",
            "lightBlue": "#92BDE1",
            "lighterBlue": "#C6DCF0",
            "lightYellow": "#F0E6B2",
            "lighterYellow": "#F5F0D9"
        }
    },
    // fonts: {
    //     heading: 'ABeeZee',
    //     body: 'ABeeZee',
    // },
    initalColorMode: 'Azee',
    useSystemColorMode: false
})


export default theme