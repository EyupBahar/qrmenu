import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import data from './urun.json';
import Produkts from "./components/produkts"
import Headear from './components/header';
import './App.css';


const kategoriResimleri = {
  Kahvalti: "https://datcakoyurunleri.com.tr/wp-content/uploads/2023/06/97.jpg",
  icecek: "https://st3.depositphotos.com/1063437/13933/i/950/depositphotos_139337538-stock-photo-bottles-of-assorted-pepsico-soft.jpg",
  yemek : "https://enlezzetlitarifler.net/wp-content/uploads/2019/12/Ana-Yemek-Tarifleri.jpeg",
  tatli : "https://cdn.shopify.com/s/files/1/1259/6441/files/tiramisu_7d093e8a-e8a3-479d-995a-acc2ac21a07a.jpg?v=1654025575"
  // Diğer kategoriler ve resimleri...
};

const App = () => {
  const [showCategories, setShowCategories] = useState(true);
  const kategoriler = [...new Set(data.map(item => item.kategori))];
  console.log(kategoriler);
  

  const handleCategoryClick = () => {
    setShowCategories(false);
  };

  return (
    <Router>
  <Headear/>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "", minHeight: "100vh" }}>
    {showCategories && (
      <div style={{ marginTop: "80px", width: "100%" }}>
        <h1 style={{ marginLeft: "30px" }}>Kategoriler</h1>
        <div className="grid-container" style={{ display: "grid", gap: "20px", maxWidth: "100%", padding: "10px" }}>
          {kategoriler.map((kategori, index) => (
            <Link key={index} to={`/kategori/${kategori}`} onClick={handleCategoryClick} style={{ textDecoration: "none" }}>
              <div style={{
                position: "relative",
                height: "250px",
                backgroundImage: `url(${kategoriResimleri[kategori]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "48px",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)"
              }}>
                <div style={{
                  position: "absolute",
                  borderRadius: "15px",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}></div>
                <span style={{ position: "relative" }}>{kategori.toUpperCase()}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )}
    <Routes>
      <Route path="/kategori/:kategoriAdi" element={<Produkts setShowCategories={setShowCategories} />} />
    </Routes>
  </div>
</Router>




  );
};

export default App;
