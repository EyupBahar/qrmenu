import React from 'react';

const Produkt = ({ urun }) => {
  return (
    <div style={{margin: "10px", backgroundColor :"#D4BDAC", padding:"10px"}}>
      <img src={urun.ürünResmi} alt={urun.başlık} style={{width: "300px", height: "200px",}} />
      <h2>{urun.başlık}</h2>
      <p>{urun.açıklama}</p>
      <p>{urun.fiyat}</p>
    </div>
  );
};

export default Produkt;
