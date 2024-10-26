import React from 'react';

const Produkt = ({ urun }) => {
  return (
    <div style={{margin: "10px", backgroundColor :"#FAF7F0", cursor: "pointer", padding:"10px", borderRadius :"10px", boxShadow: "11px 14px 17px 0px rgba(0,0,0,0.29)"}}>
      <img src={urun.ürünResmi} alt={urun.başlık} style={{width: "300px", borderRadius:"10px", height: "200px",}} />
      <h2>{urun.başlık}</h2>
      <p>{urun.açıklama}</p>
      <p>{urun.fiyat}</p>
    </div>
  );
};

export default Produkt;
