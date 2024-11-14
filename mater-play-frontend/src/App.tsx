import { Route, Routes } from "react-router-dom"
import Footer from "./app/components/Footer"
import Header from "./app/components/Header"
import HomePage from "./app/pages/home"

function App() {

  return (
    <div className="wrapper">
      <Header />
      
      <Routes>
        <Route path="/:id?" element={ <HomePage /> } />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
