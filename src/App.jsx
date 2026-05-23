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
import CRMWebsite from './SuperAdmin.jsx/CRMfortiffins';
import SuperAdminDashboard from './SuperAdmin.jsx/Dashboard';
import PaymentGateway from './Bussiness/Pages/Payment';
import MainLanding from './SuperAdmin.jsx/Domain';
import ContactPage from './component/contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/plans" element={<Plan />} />
      <Route path="/feature" element={<PauseFeature />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/superadmin" element={<MainLanding />} />
      <Route path="/superadmin/customer" element={<HomePage />} />
      <Route path="/superadmin/crm" element={<CRMWebsite />} />
      <Route path="/superadmin/admin" element={<SuperAdminDashboard />} />
      <Route path="/register" element={<TenantRegistration />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/delivery" element={<DeliveryBoyPanel />} />
      <Route path="/payment" element={<PaymentGateway />} />
      


    </Routes>
      

    </>
  )
}

export default App
