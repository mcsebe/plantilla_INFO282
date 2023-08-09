import React from "react";
import { Navbar, Home, User, Paper } from "./components"
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

const App = () => {
  return(
    <div className="bg-primary w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar/>
        </div>
      </div>
      <div className="bg-primary flex justify-center items-start xl:max-w-[1280px] w-full">
      <Router>
        <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/usuarios" element={<User/>}/>
          <Route path="/papers" element={<Paper/>}/>
        </Routes >
      </Router>
      </div>
    </div>
  )
}

export default App