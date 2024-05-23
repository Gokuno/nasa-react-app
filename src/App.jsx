import { useState } from "react"
import SideBar from "./components/SideBar"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Main />
      {showModal && (
        <SideBar />
      )}
      <Footer />
      
    </>
  )
}

export default App
