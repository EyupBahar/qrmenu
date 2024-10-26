import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../urun.json';
import Produkt from './produkt';

const Produkts = ({ setShowCategories }) => {
  const { kategoriAdi } = useParams();
  const navigate = useNavigate();
  const urunler = data.filter(urun => urun.kategori === kategoriAdi);

  useEffect(() => {
    setShowCategories(false);

    return () => {
      setShowCategories(true);
    };
  }, [setShowCategories]);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginTop : "90px"}}>
      <h1>{kategoriAdi} Ürünleri</h1>
      {/* <button onClick={handleBackClick} style={{marginBottom: "20px",cursor: "pointer", padding: "10px"}}>Geri</button> */}
      <div style={{width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent : "space-around", flexWrap : "wrap"}}>
        {urunler.length > 0 ? (
          urunler.map((urun, index) => (
            <Produkt key={index} urun={urun} />
          ))
        ) : (
          <p>Kategoriye ait ürün bulunamadı.</p>
        )}
      </div>
    </div>
  );
};

export default Produkts;
