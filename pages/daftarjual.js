import Card from "../components/seller/card";
import CardList from "../components/seller/cardlist";

const DaftarJual = () => {
  //   const contentStyle = {
  //     minHeight: "90vh",
  //     top: "56px",
  //     backgroundColor: "#f1f1f9",
  //     overflowX: "hidden",
  //   };

  return (
    <div>
      {/* <Header /> */}
      <div id="daftarjual" className="container content position-relative">
        <div className="row">
          <div className="col-12 d-flex mb-3">
            <p className="mt-5 h2 fw-bold">Daftar Jual Saya</p>
          </div>
          <div className="container mb-4">
            <div className="card-body p-0">
              <div className="profile-card border rounded">
                <div className="profile-img d-inline">
                  <img
                    src="images/image-casio1.png"
                    width="50"
                    height="50"
                    className="rounded"
                    alt="..."
                  ></img>
                </div>
                <div className="profile-name d-inline">
                  Nama Penjual
                  <br />
                  <font className="profile-kota ">Kota</font>
                </div>
                <div className="profile-button d-inline float-end mt-2">
                  <button type="button" className="btn btn-outline-dark">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-position d-flex">
          <div className="card-list-seller">
            <CardList />
          </div>
          <div className="card-seller d-flex">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      {/* <Footer */}
    </div>
  );
};

export default DaftarJual;
