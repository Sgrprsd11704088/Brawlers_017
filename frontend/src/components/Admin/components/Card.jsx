const Card = ({ title, amount }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Total {title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{amount}</h6>
      </div>
    </div>
  );
};

export default Card;
