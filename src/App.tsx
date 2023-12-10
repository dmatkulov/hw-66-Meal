import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import AddMealForm from "./containers/AddMealForm/AddMealForm";
import Layout from "./components/Layout/Layout";
import EditMealForm from "./containers/EditMealForm/EditMealForm";

function App() {
  
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add-meal" element={<AddMealForm/>}/>
          <Route path="/edit-meal/:mealId" element={<EditMealForm/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
