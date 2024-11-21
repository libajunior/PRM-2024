import { Route, Routes } from "react-router-dom"
import Header from "./app/components/ui/header"
import SideMenu from "./app/components/ui/side-menu"
import CategoryLayout from "./app/cases/categories/layout"
import { CategoryCreate } from "./app/cases/categories/create"
import { CategoryEdit } from "./app/cases/categories/edit"
import GenreLayout from "./app/cases/genres/layout"
import { GenreCreate } from "./app/cases/genres/create"
import { GenreEdit } from "./app/cases/genres/edit"
import MovieLayout from "./app/cases/movies/layout"
import { MovieCreate } from "./app/cases/movies/create"
import { MovieEdit } from "./app/cases/movies/edit"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <div className="wrapper">
      <Header />
      <main>
        <SideMenu />
        <Routes>
          <Route path="/categories" element={ <CategoryLayout /> }>
            <Route path="new" element={<CategoryCreate />} />
            <Route path=":id" element={<CategoryEdit />} />
          </Route>
          <Route path="/genres" element={ <GenreLayout /> }>
            <Route path="new" element={<GenreCreate />} />
            <Route path=":id" element={<GenreEdit />} />
          </Route>
          <Route path="/movies" element={ <MovieLayout /> }>
            <Route path="new" element={<MovieCreate />} />
            <Route path=":id" element={<MovieEdit />} />
          </Route>
        </Routes>
      </main>
      <ToastContainer />
    </div>
  )
}

export default App
