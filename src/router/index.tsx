import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RootLayout } from "../Layouts/RootLayout"
import { Home } from "../pages/Home"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}
