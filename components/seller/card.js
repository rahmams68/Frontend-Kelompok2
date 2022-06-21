const Card = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="images/image-casio1.png"
        className="card-img-top"
        alt="..."
      ></img>
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default Card;