import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import Home from "./Pages/Home";
import MyTasks from "./Pages/MyTasks";
import NewTask from "./Pages/NewTask";
import EditTasks from "./Pages/EditTasks";


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/mytasks" element={<MyTasks/>}></Route>
          <Route path="/newtask" element={<NewTask />}></Route>
          <Route path="/edittask" element={<EditTasks/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
