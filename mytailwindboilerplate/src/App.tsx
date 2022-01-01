import React from "react"
import { Body } from "./components/BodyWrapper"
import { Header } from "./components/header"
import { NavBar } from "./components/Navbar"

function App() {
  return (
    <div className="App w-full h-screen grid grid-rows-12 grid-cols-12 gap-1">
      <Header />
      <NavBar />
      <Body />
    </div>
  )
}

export default App
