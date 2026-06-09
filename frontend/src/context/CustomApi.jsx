import React, { useState } from 'react'

const CustomApi = () => {
  const [api,setApi] = useState();
  const [loading,setLoading] = useState(true);
  const [err,setErr] = useState()

function fetchApi(){
  try{
    const data = axios.get(intialURl);
    setApi(data);
    loading(false)

  }catch(error){
    err(error);
    loading(false)
  }
}


  return {api,loading,err};
}

export default CustomApi
