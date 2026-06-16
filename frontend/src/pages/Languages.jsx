import React, { useEffect, useState } from "react";
import { getCountryLanguage, getTotallanguage, TopTenLang } from "../api/Api";
import { FaUsers } from "react-icons/fa";
const Languages = () => {
  const [search, setSerach] = useState();
  const [lang, setLang] = useState();
  const [totallang, settotallang] = useState();
  const [TopTen, setTopTen] = useState();

  async function fetchLangugae() {
    const res = await getCountryLanguage(search);
    setLang(res);
  }

  async function Totallanguage() {
    const res = await getTotallanguage();
    console.log(res);
    settotallang(res[0][0].totalLanguages);
  }

  async function Toptenlang() {
    const res = await TopTenLang();
    console.log(res)
    setTopTen(res[0]);
  }
  useEffect(() => {
    fetchLangugae();
  }, []);

  useEffect(() => {
    Totallanguage();
  }, []);

  useEffect(()=>{
   Toptenlang()
  },[])
  return (
    <div>
      <div className="border p-3 d-flex gap-5 Custom-bg  rounded ">
        <div className="bg-warning custom ">
          <FaUsers className="customH" />
        </div>

        <div>
          <p>Total Language</p>
          <span>{totallang}</span>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between mt-3">
        <input
          type="text"
          onChange={(e) => setSerach(e.target.value)}
          value={search}
        />
        <button className="btn btn-primary" onClick={fetchLangugae}>
          Serach
        </button>
      </div>

      <hr />

      <ul>
        {lang?.map((list, i) => (
          <li>{list.Language}</li>
        ))}
      </ul>

      <hr />

      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">SrNo</th>
              <th scope="col">Language</th>
              <th scope="col">CountryCount</th>
            </tr>
          </thead>
          <tbody>
            {TopTen?.map((lang, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{lang.Language}</td>
                <td>{lang.countryCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Languages;
