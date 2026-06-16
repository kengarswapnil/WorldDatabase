import React from 'react'

import axiosInstance from './AxiosInstance'

export async function getTottalPopulation() {
  const res = await axiosInstance.get('/TotalCountry');
  console.log(res.data)
  return res.data[0].total;
}

export async function getPopulation() {
  const res = await axiosInstance.get('/TotalP');
  console.log(res.data);
  return res.data[0].total;
}

export async function getTotalCity() {
  const res = await axiosInstance('/totalCity');
  console.log(res.data)
  return res.data.totalCites[0].total;
}


export async function getTopten() {
  const res = await axiosInstance.get('/Topten');
  console.log(res.data);
  return res.data.result;
}

export async function TotalCountry() {
  const res = await axiosInstance.get('/TotalCountry');
  console.log(res.data)
  return res.data[0].total;
}

export async function Conteinetwisepop() {
  const res = await axiosInstance.get('/ContinentWise');
  console.log(res.data)
  return res.data.result.map(item => ({
    continent: item.continent,
    totalPopulation: Number(item.totalPopulation) // 🔥 MUST
  }));

}


export async function SearchCountryUsingName(countryName) {
  const res = await axiosInstance.get(`/country-pop/${countryName}`);
  console.log(res.data);
  return res.data.country[0];
}

export async function serachByName(cityName) {
  const res = await axiosInstance.get(`/city/${cityName}`)
  console.log(res.data);
  return res.data.rows[0];
}

export async function largestCity() {
  const res = await axiosInstance.get('/getLargeestCity');
  console.log(res.data)
  return res.data.resultDB;
}



export async function getCountryminipop(minpop) {
  const res = await axiosInstance.get(`/getMiniPop/${minpop}`)
  return res.data.resultDb;
}


export async function getCountrylesspop(lesspop) {
  const res = await axiosInstance.get(`/getLessPop/${lesspop}`)
  return res.data.resultDB
}


export async function getCountryLanguage(countryName) {
  const res = await axiosInstance.get(`/getlanguge/${countryName}`)
  return res.data.resultDb
}


export async function getTotallanguage() {
  const res = await axiosInstance.get('/getTotallanguage');
  return res.data.resultDB;
}

export async function TopTenLang() {
  const res = await axiosInstance.get('/getTopTenlanguage')
  return res.data.resultDB
}


export async function getAvgLifeExp() {
  const res =  await axiosInstance.get('/getAvgLifeExpectancy');
  return res.data.resultDB;
}

export async function getTopTenLife() {
  const res = await axiosInstance.get('/getTopLifeExpectancyCountries');
  return res.data.resultDB[0];
}


export async function getLowestLifeCountry() {
  const res = await axiosInstance.get('/getLowestLifeExpectancyCountries');
  return res.data.resultDB[0];  
}