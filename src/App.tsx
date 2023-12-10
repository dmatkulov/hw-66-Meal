import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";

function App() {
  
  return (
    <>
      App
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
