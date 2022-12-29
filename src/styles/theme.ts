import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "700": "#353646",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B0",
            "100": "#F5F8FA",
        },
        yellow: {
            "400": "#FFBA08",
            "300": "rgba(255, 186, 8, 0.5)"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.100',
                color: 'gray.700'
            },
            a: {
                textDecoration: 'none'
            }
        }
    }
})