import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { Outlet } from "react-router-dom"

import { Header } from "../components/Header"
import { theme } from "../styles/theme"

export const RootLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}
