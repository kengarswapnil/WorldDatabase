import React from "react";
import { useState } from "react";

import { useEffect } from "react";
import Charts2 from "../components/Charts2";
import { Conteinetwisepop } from "../api/Api";


const Population = () => {
  const [data, setData] = useState([]);
  console.log("DATA:", data);
  async function fetchData(params) {
    const res = await Conteinetwisepop();
    setData(res)
  }

  useEffect(()=>{
     fetchData();
  },[])

  return (
    <div>
      {data.length > 0 ? (
        <Charts2 data={data} />
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
};

export default Population;
