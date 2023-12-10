import {Route, Routes} from "react-router-dom";
import AddMealForm from "./containers/AddMealForm/AddMealForm";
import Layout from "./components/Layout/Layout";
import EditMealForm from "./containers/EditMealForm/EditMealForm";
import Meals from "./containers/Meals/Meals";

function App() {
  
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Meals/>} />
          <Route path="/add-meal" element={<AddMealForm/>}/>
          <Route path="/edit-meal/:mealId" element={<EditMealForm/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
