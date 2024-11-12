import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DefaultLayout from './layout/DefaultLayout'
import Dashboard from './dashboard/Dashboard'
import AppContextProvider from "./context/AppContext";
import 'leaflet/dist/leaflet.css';

function App() {
  
  return (
    <div className={`w-full`}>
      <AppContextProvider>
        <Router>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Dashboard />} />
            </Route>
          </Routes>
        </Router>
      </AppContextProvider>
    </div>
  )
}

export default App
