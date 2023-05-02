const Restaurant = ({ data }) => {
  return (
    <>
      <div className="restaurant-box">
        <div className="text-box">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
        </div>
        <img src={data.picture} alt="Table contenant des plats du restaurant" />
      </div>
    </>
  );
};

export default Restaurant;
