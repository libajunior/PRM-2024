import { ToastContainer } from "react-toastify"
import VehicleTypeEditPage from "./app/cases/vehicle-types/edit"
import VehicleTypeLayout from "./app/cases/vehicle-types/layout"
import Header from "./app/components/ui/header"
import SideMenu from "./app/components/ui/side-menu"
import {Route, Routes} from "react-router-dom"
import VehicleTypeCreatePage from "./app/cases/vehicle-types/create"
import VehicleFactoryLayout from "./app/cases/vehicle-factories/layout"
import VehicleFactoryCreatePage from "./app/cases/vehicle-factories/create"
import VehicleFactoryEditPage from "./app/cases/vehicle-factories/edit"
import VehicleModelLayout from "./app/cases/vehicle-models/layout"
import VehicleModelCreatePage from "./app/cases/vehicle-models/create"
import VehicleModelEditPage from "./app/cases/vehicle-models/edit"
import VehicleLayout from "./app/cases/vehicle/layout"
import VehicleCreatePage from "./app/cases/vehicle/create"
import VehicleEditPage from "./app/cases/vehicle/edit"

function App() {

  return (
    <div className="wrapper">
      <Header />
      <main>
        <SideMenu />
        <Routes>
          <Route path="/vehicle-types" element={ <VehicleTypeLayout /> }>
            <Route path="new" element={ <VehicleTypeCreatePage /> } />
            <Route path=":id" element={ <VehicleTypeEditPage /> } />
          </Route>
          <Route path="/vehicle-factories" element={ <VehicleFactoryLayout /> }>
            <Route path="new" element={ <VehicleFactoryCreatePage /> } />
            <Route path=":id" element={ <VehicleFactoryEditPage /> } />
          </Route>
          <Route path="/vehicle-models" element={ <VehicleModelLayout /> }>
            <Route path="new" element={ <VehicleModelCreatePage /> } />
            <Route path=":id" element={ <VehicleModelEditPage /> } />
          </Route>
          <Route path="/vehicles" element={ <VehicleLayout /> }>
            <Route path="new" element={ <VehicleCreatePage /> } />
            <Route path=":id" element={ <VehicleEditPage /> } />
          </Route>
        </Routes>
      </main>
      <ToastContainer />
    </div>
  )
}

export default App
