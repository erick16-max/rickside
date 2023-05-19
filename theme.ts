import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import { Source_Sans_Pro } from "next/font/google";

export const roboto = Source_Sans_Pro({
    weight: ['400', '600', '900'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
  });


// Create Color Token
export const tokens = (mode: string)=> ({
    ...(
        mode === "dark" ?
        {
            //accent indigo
indigoAccent: {
    100: "#d9dcf0",
    200: "#b2b9e1",
    300: "#8c97d3",
    400: "#6574c4",
    500: "#3f51b5",
    600: "#324191",
    700: "#26316d",
    800: "#192048",
    900: "#0d1024"
},

//accent pink
pinkAccent: {
    100: "#fdccdd",
    200: "#fb99bc",
    300: "#f9669a",
    400: "#f73379",
    500: "#f50057",
    600: "#c40046",
    700: "#930034",
    800: "#620023",
    900: "#310011"
},

//blue accent
blueAccent: {
    100: "#cfdaec",
    200: "#9eb5d9",
    300: "#6e91c7",
    400: "#3d6cb4",
    500: "#0d47a1",
    600: "#0a3981",
    700: "#082b61",
    800: "#051c40",
    900: "#030e20"
},

//gray
grayAccent: {
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#ffffff",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
},

//primary dark blue
blackPrimary: {
    100: "#d0d1d5",
    200: "#a1a4ab",
    300: "#727681",
    400: "#434957",
    500: "#141b2d",
    600: "#101624",
    700: "#0c101b",
    800: "#080b12",
    900: "#040509"
},
        }
        :
        {
            //accent indigo
indigoAccent: {
    100: "#192048",
    200: "#0d1024",
    300: "#26316d",
    400: "#324191",
    500: "#3f51b5",
    600: "#6574c4",
    700: "#8c97d3",
    800: "#b2b9e1",
    900: "#d9dcf0",
},

//accent pink
pinkAccent: {
    100: "#310011",
    200: "#620023",
    300: "#930034",
    400: "#c40046",
    500: "#f50057",
    600: "#f73379",
    700: "#f9669a",
    800: "#fb99bc",
    900: "#fdccdd",
},

//blue accent
blueAccent: {
    100: "#030e20",
    200: "#051c40",
    300: "#082b61",
    400: "#0a3981",
    500: "#0d47a1",
    600: "#3d6cb4",
    700: "#6e91c7",
    800: "#9eb5d9",
    900: "#cfdaec",
},

//gray
grayAccent: {
    100: "#141414",
    200: "#292929",
    300: "#3d3d3d",
    400: "#525252",
    500: "#666666",
    600: "#858585",
    700: "#a3a3a3",
    800: "#c2c2c2",
    900: "#e0e0e0",
},


//primary dark blue
blackPrimary: {
    100: "#040509",
    200: "#080b12",
    300: "#0c101b",
    400: "#101624",
    500: "#141b2d",
    600: "#434957",
    700: "#727681",
    800: "#a1a4ab",
    900: "#d0d1d5",
    
},
        }
    )
})

// Create MUI Theme Settings
export const themeSettings = (mode: string) => {
    const colors = tokens(mode)
    return {
        palette: {
            mode: mode,
            ...(
                mode === "dark" 
                ?   {
                        primary: {
                            main: colors.blackPrimary[500],
                        },
                        secondary: {
                            main: colors.indigoAccent[500],
                        },
                        neutral: {
                            dark: colors.grayAccent[700],
                            main: colors.grayAccent[500],
                            light: colors.grayAccent[100],
                        },
                        background: {
                            default: colors.blackPrimary[600]
                        },
                        error:{
                            main: colors.pinkAccent[500]
                        },

                }
                :
                {
                    primary: {
                        main: colors.blackPrimary[100],
                    },
                    secondary: {
                        main: colors.indigoAccent[500],
                    },
                    neutral: {
                        dark: colors.grayAccent[700],
                        main: colors.grayAccent[500],
                        light: colors.grayAccent[100],
                    },
                    background: {
                        default: '#fff',
                    },
                    error:{
                        main: colors.pinkAccent[500]
                    },

            }
                )

        },
        typography: {
            fontFamily: roboto.style.fontFamily,
          },
    }
}

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
}
)

export const useMode = () => {
    const [mode, setMode] = useState("light");
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
    );
  
    //@ts-ignore
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
  };

