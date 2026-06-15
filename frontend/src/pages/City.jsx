import React from 'react'
import { useState } from 'react';
import { largestCity, serachByName } from '../api/Api';
import axios from 'axios';
import { useEffect } from 'react';

const City = () => {

  const [search, setSerach] = useState();
  const [cityName, setCityName] = useState();

  const [data, setData] = useState([]);

  const handleSerach = async () => {
    const res = await serachByName(search);
    setCityName(res.city)
  }

  const fetchData = async () => {
    const res = await largestCity();
    setData(res)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <div className='d-flex justify-content-between' >
        <input type="text" value={search} onChange={(e) => setSerach(e.target.value)} />
        <button className='btn btn-danger ms-2' onClick={handleSerach}>Search</button>
      </div>
      <hr />
      <div>
        <p>Searched city:</p>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">SrNo</th>
                <th scope="col">Name</th>
                <th scope="col">CountryCode</th>
                <th scope="col">District</th>
              </tr>
            </thead>

              <tbody>
  {cityName && cityName.length > 0 && (
    <tr>
      <th scope="row">1</th>
      <td>{cityName[0].Name}</td>
      <td>{cityName[0].CountryCode}</td>
      <td>{cityName[0].District}</td>
    </tr>
  )}
</tbody>
             
          
          </table>
        </div>
      </div>
      <hr />
      <div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">SrNo</th>
              <th scope="col">Name</th>
              <th scope="col">CountryCode</th>
              <th scope="col">District</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((d, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{d.Name}</td>
                <td>{d.CountryCode}</td>
                <td>{d.District}</td>
                <td></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default City

