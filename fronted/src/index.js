import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './landing_page/Dashboard/Dashboard';
import ManageRoles from './landing_page/Roles/ManageRoles';
import ManagePermissions from './landing_page/Permissions/ManagePermissions';
import NotFound from './landing_page/NotFound';
import EditPermission from './landing_page/Permissions/EditPermission';
import EditRole from './landing_page/Roles/EditRole';
import AddPermission from './landing_page/Permissions/AddPermission';
import AddRole from './landing_page/Roles/AddRole';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <Routes>
        <Route  path="/admin" element={<Dashboard/>} />
        <Route  path="/roles" element={<ManageRoles/>} />
        <Route  path="/permissions" element={<ManagePermissions/>} />
        <Route path="/permissions/:id" element={<EditPermission/>} />
        <Route path="/roles/:id" element={<EditRole/>} />
        <Route path='/permissions/new' element={<AddPermission/>} />
        <Route path='/roles/new' element={<AddRole/>} />
        <Route  path="*" element={<NotFound/>} />
      </Routes>
   </BrowserRouter>
);

