import React, { useEffect, useState } from 'react'
import { getCountryLanguage } from '../api/Api'

const Languages = () => {
    const [search, setSerach] = useState();
  const [lang, setLang] = useState();

  async function fetchLangugae() {
    const res = await getCountryLanguage(search);
    setLang(res)
  }

  useEffect(()=>{
    fetchLangugae();
  },[])
  return (
    <div>
      
      <div className='d-flex justify-content-between'>
        <input type="text" onChange={(e)=>setSerach(e.target.value)} value={search} />
        <button className='btn btn-primary' onClick={fetchLangugae}>Serach</button>
      </div>
      
      
      
      
      <hr />



      <ul>
        {lang?.map((list,i)=>(
          <li>{list.Language}</li>
        ))}
      </ul>

    </div>
  )
}

export default Languages
