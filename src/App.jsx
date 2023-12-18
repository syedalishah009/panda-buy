import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsTable from './pages/Dashboard/ProductsTable';
import Navbar from './pages/Dashboard/Navbar';
import Sidebar from './pages/Dashboard/Sidebar';
import AddProduct from './pages/Dashboard/AddProduct';


function App() {

  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<ProductsTable />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
      </Router>

    </>
  );
}

export default App;
