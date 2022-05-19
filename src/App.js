import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CURRENTPage from './components/CURRENTPage'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes } from "react-router-dom";


function App() {
  const [currentPage, setCurrentPage] = useState ('About');
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={setCurrentPage} />
      <CURRENTPage currentPage={currentPage}/>
      <Footer currentPage={currentPage} handlePageChange={setCurrentPage}/>
    </div>
  );
}

export default App;