import { ToastContainer } from "react-toastify"
import { Header } from "./app/components/ui/header"
import { VehiclesProvider } from "./contexts/VehicleContext"
import { FilterBar } from "./app/components/ui/filter-bar"
import { Container } from "@mui/material"
import { VehicleContainer } from "./app/components/ui/vehicle-container"


function App() {

  return (
    <div>
        <Header />
        <main>
          <Container>
            <VehiclesProvider>
              <FilterBar />
              <VehicleContainer />
            </VehiclesProvider>
          </Container>
        </main>
        <ToastContainer />
    </div>
  )
}

export default App
