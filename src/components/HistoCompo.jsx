function HistoCompo({ histoKey, histoState }) {
  return (
    <button
      key={histoKey}
      style={{
        width: "200px",
        height: "30px",
        fontSize: "15px",
        marginTop: "40px",
        marginLeft: "60px",
      }}
    >
      {histoState}
    </button>
  );
}
export default HistoCompo;
