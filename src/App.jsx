import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home.jsx"
import Pricing from "./Pages/Pricing.jsx"

const App = () => {
  return (
<Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />

            </Routes>
        </Router>
  )
}

export default App
