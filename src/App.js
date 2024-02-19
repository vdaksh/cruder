import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from './compoments/Create';
import Read from './compoments/Read';
import Update from "./compoments/Update";


function App  (){
  return (
   <div className="container">
    <BrowserRouter>
         <Routes>
             <Route exact path="/" element={<Create/>}></Route>
             <Route exact path="/read" element={<Read/>}></Route>
             <Route exact path="/update" element={<Update/>}></Route>
         </Routes>
    
    </BrowserRouter>
   </div>
  );
}

export default App;