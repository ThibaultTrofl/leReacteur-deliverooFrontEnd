import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isSelect, setIsSelect] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://site--deliveroo-backend--tq978s5f6htc.code.run/"
      );

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
      <Main
        data={data}
        isSelect={isSelect}
        setIsSelect={setIsSelect}
        total={total}
        setTotal={setTotal}
      />
    </>
  );
}

export default App;
