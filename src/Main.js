import { Routes, Route} from "react-router-dom"

import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Reservation from "./Components/Reservation";
import Order from "./Components/Order";
import Login from "./Components/Login";

function Main(){
  return(
    <main>
      <Routes>
          <Route path="/" element={<HomePage/>}>HomePage</Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/reservation" element={<Reservation/>}></Route>
          <Route path="/order" element={<Order/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </main>
  );
}

export default Main;