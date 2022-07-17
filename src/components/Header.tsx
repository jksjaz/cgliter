import { Paper } from "@mui/material"

export const Header = () => {
  return (
    <header className="h-14">
      <Paper elevation={0} className="h-full flex items-center px-4" sx={{ backgroundColor: "primary.800" }}>
        <h1 className="text-white">CGLITER</h1>
      </Paper>
    </header>
  )
}
