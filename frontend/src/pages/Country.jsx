import React from 'react'
import Chart from '../components/Chart'
import { useState } from 'react'
import { getCountrylesspop, getCountryminipop, getTopten, getTottalPopulation, SearchCountryUsingName } from '../api/Api';
import { useEffect } from 'react';
import { GiWorld } from "react-icons/gi";

const Country = () => {
  const [data, setData] = useState();
  const [country, setCountry] = useState();
  const [searchText, setSearchText] = useState("");

  // const [popbycountry, setPopbycountry] = useState();
  const [countryResult, setCountryResult] = useState(null); // single
  const [populationList, setPopulationList] = useState([]); // array

  async function fetchCountry() {
    const res = await getTottalPopulation();
    setCountry(res);
  }
  async function topTon() {
    const res = await getTopten();
    setData(res);
  }

  const handleSearch = async () => {
    const value = searchText.trim().toLowerCase();
    if (!value) return;

    // LESS POPULATION
    if (value.includes("less")) {
      const num = value.replace("less", "").trim();
      const res = await getCountrylesspop(num[0]);
      setPopulationList(res || []);
      setCountryResult(null);
    }

    // MIN POPULATION
    else if (value.includes("min")) {
      const num = value.replace("min", "").trim();
      const res = await getCountryminipop(num[0]);
      setPopulationList(res || []);
      setCountryResult(null);
    }

    // NAME SEARCH
    else {
      const res = await SearchCountryUsingName(value);
      setCountryResult(res);
      setPopulationList([]);
    }
  };
  useEffect(() => {
    topTon();
    fetchCountry();

  }, [])
  return (
    <div>

      <div className='d-flex justify-content-between'>
        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button className='btn btn-primary' onClick={handleSearch}>Search</button>
      </div>
      <hr />
      {countryResult && (
        <div>
          <h3 className='text-dark'>{countryResult.Name}</h3>
          <h4>{countryResult.Population}</h4>
        </div>
      )}

      <hr />
      <div>
        <p>list of greaterthan value  of population :</p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">SrNo</th>
              <th scope="col">Name</th>
              <th scope="col">Population</th>
              <th scope="col">CountryCode</th>
            </tr>
          </thead>
          <tbody>
            {(populationList || []).map((b, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{b.Name}</td>
                <td>{b.Population}</td>
                <td>{b.CountryCode}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      <hr />
      <div className="border p-3 ms-2 mb-2 Custom-bg d-flex gap-5  rounded customWidth">

        <div className="bg-warning custom">
          <GiWorld className="customH" />
        </div>

        <div>
          <p> TotalCountry</p>
          <span>{country}</span>
        </div>
      </div>
      <Chart data={data} />
      <hr />


    </div>
  )
}

export default Country
