
const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <p>&#11088;</p>
          ) : (
            <p>&#11088;</p>
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;