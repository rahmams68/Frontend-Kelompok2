const CardList = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <p className="card-text fw-bold">Kategori</p>
        <p className="semua-prod card-text">Semua Produk</p>
        <hr />
        <p className="diminati card-text">Diminati</p>
        <hr />
        <p className="terjual card-text">Terjual</p>
      </div>
    </div>
  );
};

export default CardList;
