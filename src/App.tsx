import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ShipmentPage } from './pages/Shipment/Index';
import './styles/app.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path=":code" element={<ShipmentPage />} />
        <Route path="/" element={<Navigate replace to="/84043113" />} />
      </Routes>
    </>
  );
}

export default App;
