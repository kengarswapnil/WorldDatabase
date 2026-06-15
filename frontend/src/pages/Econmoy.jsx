import React from "react";
import { PieChart } from "recharts";
import Charts2 from "../components/Charts2";
import { useState } from "react";
import axiosInstance from "../api/AxiosInstance";
import { useEffect } from "react";
import { getPopulation, getTotalCity, getTottalPopulation } from "../api/Api";
import { FaUsers } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";



const Econmoy = () => {
  const [tpop, setTpop] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  async function fetchCountry() {
    const res = await getTottalPopulation();
    setCountry(res);
  }





  async function fetchData() {
    const res = await getPopulation();
    setTpop(res);
  }

  async function TotalCity() {
    const res = await getTotalCity();
    setCity(res);
  }

  async function TotalCountry() {
    const res = await TotalCountry();
    setCountry(res)
  }



  useEffect(() => {
    fetchCountry();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    TotalCity();
  }, []);

  useEffect(() => {
    TotalCountry();
  }, [])
  return (
    <div className="d-flex ">
      <div className="border p-3 d-flex gap-5 Custom-bg  rounded ">
        <div className="bg-warning custom">
          <FaUsers className="customH" />
        </div>

        <div>
          <p>Total Population</p>
          <span>{tpop}</span>
        </div>
      </div>
      {/* get total city count  */}
      <div className="border p-3 ms-2 Custom-bg d-flex gap-5  rounded customWidth">

        <div className="bg-warning custom">
          <GiModernCity className="customH" />
        </div>

        <div>
          <p> TotalCity: </p>
          <span>{city}</span>
        </div>
      </div>

      {/* get total country count  */}
      <div className="border p-3 ms-2 Custom-bg d-flex gap-5  rounded customWidth">

        <div className="bg-warning custom">
          <GiWorld className="customH" />
        </div>

        <div>
          <p> TotalCountry</p>
          <span>{country}</span>
        </div>
      </div>
    </div>
  );
};

export default Econmoy;
