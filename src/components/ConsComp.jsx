

const ConsComp = ({ cons, date }) => {
    return (
      <div className="cons-comp">
        <img src={cons} alt="Cons" className="cons-img" />
        <h1 className="consTitle">Diseño - Construcción</h1>
        <p className="consDescription">{date}</p>
      </div>
    );
  };

export default ConsComp;
  
