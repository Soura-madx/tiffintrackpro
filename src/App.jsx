import { useState } from 'react'

import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Bussiness/Pages/Home';
import Plan from './Bussiness/Pages/Plan';
import PauseFeature from './Bussiness/Pages/Feature';
import AdminPanel from './AdminTiffin/Dashboard';
import HomePage from './SuperAdmin.jsx/CustomerWeb';
import TenantRegistration from './AdminTiffin/RegisterTenant';
import MenuPage from './component/Menu';
import DeliveryBoyPanel from './DeliveryBoy/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/plans" element={<Plan />} />
      <Route path="/feature" element={<PauseFeature />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/superadmin" element={<HomePage />} />
      <Route path="/register" element={<TenantRegistration />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/delivery" element={<DeliveryBoyPanel />} />


    </Routes>
      

    </>
  )
}

export default App
