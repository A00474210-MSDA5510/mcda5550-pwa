export const Student = ({ name, num, city }) => {
  return (
    <div className="student">
      <h1>{name}</h1>
      <h2>{num}</h2>
      <p>{city}</p>
    </div>
  );
};
