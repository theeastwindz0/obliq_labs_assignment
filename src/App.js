import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./screens/Menu";

function App() {
  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path="/" exact  element={<Menu/>}/>
        <Route path="/task1" element={<Screen1/>}/>
        <Route path="/task2" element={<Screen2/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
