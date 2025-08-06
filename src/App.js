import './App.css';

// Components
import NavBar from './components/navbar';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import CrudApp from './components/CrudApp';
import EditUser from './components/EditUser'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<CrudApp />} /> 
        <Route path='/AllUsers' element={<AllUsers />} /> 
        <Route path='/AddUser' element={<AddUser />} /> 
        <Route path='/EditUser/:id' element={<EditUser />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
