import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
    sm: '325px',
    md: '768px',
    lg: '1024px',
    xl: '1366px',
    '2xl' : '1920px'
}

export const customTheme = extendTheme({
    fonts: {
        heading: `'Nunito', sans-serif`,
        body: `'Nunito', sans-serif`
    },
    breakpoints,
})
