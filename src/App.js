// React_Router-Dom is a Library within react that is used to implement client side routing in react application

import React from "react";
import { BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom'    // needed to install before writing this code ["npm install react-router-dom"]
import Home from "./pages/Home";
import Project from "./pages/Project";


function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>      {/* like a container to have all the child route, can omit this if have only 1 route*/}

          <Route index element={<Home/>}/>
          <Route path="/project" element={<Project/>}/>

          {/* <Route path="*" element={<GIve NOT FOUND/>}/> */}
          

      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;