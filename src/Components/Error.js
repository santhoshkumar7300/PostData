export default function Error() {
  const myStyle = {
    color: "red",
  };
  const myStylePara = {
    fontSize: "40px",
    textAlign: "center",
  };

  return (
    <div>
      <p style={myStylePara}>
        {" "}
        <span style={myStyle}>404</span> Not Found{" "}
      </p>
    </div>
  );
}
