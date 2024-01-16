import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userform from "./components/Userform";
import Userdetails from "./components/Userdetails";
import Userstate from "./context/Userstate";

function App() {
  return (
    <>
    <Userstate>
    <BrowserRouter>
    <div className="container">
    <Routes>
      <Route path="/" element={<Userform/>}></Route>
      <Route path="/details" element={<Userdetails/>}></Route>
    </Routes>
    </div>
  </BrowserRouter>
    </Userstate>
    </>
    
  );
}

export default App;
