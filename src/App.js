
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Base from './components/Base';
import Header from './components/Header';
import Home from './components/Home';
import NoPage from './components/NoPage';
import Order from './components/Order';
import Toppings from './components/Toppings';
import { AnimatePresence } from 'framer-motion';
import Modal from './components/Modal';


function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({base: "", toppings:[] });
  const [showModal, setshowModal] = useState(false);

  const addBase = (base)=>{
    setPizza({...pizza, base});
  }

  const addTopping = (topping)=>{
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    }
    else{
      newToppings = pizza.toppings.filter(item=>item !=topping);
    }
    setPizza({...pizza, toppings:newToppings});
  }


  return (
    <div>
      
      <Header/>
      <Modal showModal={showModal} setshowModal={setshowModal}/>
      <AnimatePresence mode='wait' onExitComplete={()=>setshowModal(false)}>
        <Routes location={location} key={location.key}>
          <Route path='/base' element={<Base addBase={addBase} pizza={pizza}/>}></Route>
          <Route path='/toppings' element={<Toppings addTopping={addTopping} pizza ={pizza}/>}></Route>
          <Route path='/order' element={<Order pizza={pizza} setshowModal={setshowModal}/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path="*" element={<NoPage />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
