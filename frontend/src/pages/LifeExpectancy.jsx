import React from 'react'
import { useState } from 'react'
import { getAvgLifeExp, getLowestLifeCountry, getTopTenLife } from '../api/Api';
import { FaUsers } from "react-icons/fa";
import { useEffect } from 'react';

const LifeExpectancy = () => {
  const [avglife, setAvgLife] = useState();
  const [TopTenLife, setTopten] = useState();
  const [lowest, setLowest] = useState();


  async function AvgLife() {
    const res = await getAvgLifeExp();
    setAvgLife(res[0][0].avgLifeExpectancy)
  }

  async function TopTenLifeCountry() {
    const res = await getTopTenLife()
    setTopten(res);
  }

  async function LowestLifeExp() {
    const res = await getLowestLifeCountry();
    console.log(res)
    setLowest(res)
  }

  useEffect(() => {
    AvgLife();
  }, [])

  useEffect(() => {
    LowestLifeExp();
  }, [])

  useEffect(() => {
    TopTenLifeCountry();
  }, [])
  return (
    <div>
      <div className="border p-3 d-flex gap-5 Custom-bg  rounded ">
        <div className="bg-warning custom ">
          <FaUsers className="customH" />
        </div>

        <div>
          <p>AvgLifeExpectancy</p>
          <span>{avglife}</span>
        </div>
      </div>
      <hr />
      {/* TopTenLife */}

      <div>
        <p className='mb-2'># TopLifeExpectancyCountries</p>
        <hr />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">SrNo</th>
              <th scope="col">Name</th>
              <th scope="col">Population</th>
              <th scope="col">LifeExpectancy</th>
            </tr>
          </thead>
          <tbody>
            {TopTenLife?.map((l, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{l.Name}</td>
                <td>{l.Population}</td>
                <td>{l.LifeExpectancy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* LowestLifeExpectancyCountries */}
      <div>
        <p># LowestLifeExpectancyCountries :-</p>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">SrNo</th>
                <th scope="col">Name</th>
                <th scope="col">Population</th>
                <th scope="col">LifeExpectancy</th>
              </tr>
            </thead>
            <tbody>
              {lowest?.map((l, i) => (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{l.Name}</td>
                  <td>{l.Population}</td>
                  <td>{l.LifeExpectancy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default LifeExpectancy
