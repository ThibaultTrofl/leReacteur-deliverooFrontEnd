import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/Header.jsx";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3200/");

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <>
      <span>Loading ...</span>
    </>
  ) : (
    <>
      <Header data={data} />

      {/* <p>{data.restaurant.name}</p> */}
    </>
  );
}

export default App;
