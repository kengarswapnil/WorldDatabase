const connection = require("../config/db");
const { get } = require("../Routes/databaseRoutes");

//get total country
const TotalCountry = async (req, res) => {
  try {
    const q1 = "select count(*) as total from country;";
    const [rows] = await connection.promise().query(q1);
    console.log(rows);
    res.json(rows);
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
};

// get all sum of population
const getTotalPouplation = async (req, res) => {
  try {
    const total = "select sum(population) as total from country";
    const [result] = await connection.promise().execute(total);
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ msg: "Server Error" });
  }
};

// get total city
const getTotalCity = async (req, res) => {
  try {
    const totalcity = "select count(*) as total from city";
    const [totalCites] = await connection.promise().execute(totalcity);
    console.log(totalCites);
    res.status(200).send({ msg: "TotalCities", totalCites });
  } catch (err) {
    res.status(500).send({ msg: "Server Error" });
  }
};

// cotinent wise country name
const getContinentCountry = async (req, res) => {
  try {
    const countryName = "select Name, Continent from country;";
    const [result] = await connection.promise().execute(countryName);
    console.log(result);
    res.status(200).send({ msg: "ContinentCountry", result });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
};

// count  number of country in Continent

const getNoContinent = async (req, res) => {
  try {
    const numOfCountry =
      "select Continent, count(*) NoOFCountry from country group by Continent";
    const [result] = await connection.promise().execute(numOfCountry);
    console.log(numOfCountry);
    res.status(200).send({ msg: "NumOfCountry", result });
  } catch (err) {
    res.status(500).send({ msg: "Server Error" });
  }
};

// get population greaterthan 1000000000

const getPopulation = async (req, res) => {
  try {
    const population =
      "select Name ,Population from country where Population > 100000000;";
    const [result] = await connection.promise().execute(population);
    console.log(result);
    res.status(200).send({ msg: "PopulationGeaterThan", result });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

const getTopten = async (req, res) => {
  try {
    const topTen =
      "select Name ,Population from country order by population desc limit 10;";
    const [result] = await connection.promise().execute(topTen);
    console.log(result);
    res.status(200).send({ msg: "TopTen", result });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

const getContinentWisePop = async (req, res) => {
  try {
    const pop =
      "select continent ,sum(Population) as totalPopulation from country group by Continent order by totalPopulation desc ";

    const [result] = await connection.promise().execute(pop);
    res.status(200).send({ msg: "continent", result });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

// get population by conuntry
const getpopulationbycountry = async (req, res) => {
  try {
    const { countryName } = req.params;
    const p7 = `  SELECT Name, Population
      FROM country
      WHERE Name = ?`;
    const result = await connection.promise().execute(p7, [countryName]);
    console.log(result);
    const rows = result[0];
    res.status(200).send({ country: rows });
  } catch (error) {
    console.log("FULL ERROR 👉", error);
    res.status(500).send({ msg: "Server Error" });
  }
};

// get city by name
const getCityByName = async (req, res) => {
  try {
    const { cityName } = req.params;
    const query = `SELECT *
      FROM city
      WHERE Name = ?`;

    const [rows] = await connection.promise().execute(query, [cityName]);
    console.log(cityName);
    res.status(200).send({ city: rows });
  } catch (error) {
    console.log("ERROR 👉", error);
    res.status(500).send({ msg: "Server Error" });
  }
};

const getLargeestCity = async (req, res) => {
  try {
    const q7 = ` SELECT ID, Name, CountryCode, District, Population
      FROM city
      ORDER BY Population DESC
      LIMIT 10`;

    const [resultDB] = await connection.promise().execute(q7);
    res.status(200).send({ resultDB });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

const getMiniPopulation = async (req, res) => {
  try {
    const { minpop } = req.params;
    const query = `SELECT Name, Population, Code AS CountryCode, Continent
FROM country
WHERE Population > ?
ORDER BY Population DESC;`;
    const [resultDb] = await connection.promise().execute(query, [minpop]);
    res.status(200).send({ resultDb });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

const getLessPopulation = async (req, res) => {
  try {
    const { lesspop } = req.params;
    const query = `SELECT Name, Population, Code AS CountryCode, Continent
  FROM country
  WHERE Population < ?
  ORDER BY Population DESC;`;
    const [resultDb] = await connection.promise().execute(query, [lesspop]);
    res.status(200).send({ resultDb });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

const getlangugesbyCountry = async (req, res) => {
  try {
    const { countryName } = req.params;
    const query = ` SELECT cl.Language
      FROM countrylanguage cl
      JOIN country c
      ON cl.CountryCode = c.Code
      WHERE c.Name = ?`;
    const [resultDb] = await connection.promise().execute(query, [countryName]);
    res.status(200).send({ resultDb });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).send({ msg: "Server Error" });
  }
};

const getTotalLanguage = async (req, res) => {
  try {
    const query =
      " SELECT COUNT(DISTINCT Language) AS totalLanguages FROM countrylanguage";
    const resultDB = await connection.promise().execute(query);
    res.status(200).send({ resultDB });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

// get toptenlanguages
const getTopTenLanguages = async (req, res) => {
  try {
    const query = ` SELECT Language,
            COUNT(*) AS countryCount
      FROM countrylanguage
      GROUP BY Language
      ORDER BY countryCount DESC
      LIMIT 10`;
    const resultDB = await connection.promise().execute(query);
    res.status(200).send({ resultDB });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

// get LifeExpectancy

const getAvgLifeExpectancy = async (req, res) => {
  try {
    const query =
      " SELECT ROUND(AVG(LifeExpectancy), 2) AS avgLifeExpectancy FROM country WHERE LifeExpectancy IS NOT NULL";
    const resultDB = await connection.promise().execute(query);
    res.status(200).send({ resultDB });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

// get toptenlifeexp

const getTopLifeExpectancyCountries = async (req, res) => {
  try {
    const query =
      "  SELECT Name, Population, LifeExpectancy FROM country WHERE LifeExpectancy IS NOT NULL ORDER BY LifeExpectancy DESC LIMIT 10";

    const resultDB = await connection.promise().execute(query);
    res.status(200).send({ resultDB });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

const getLowestLifeExpectancyCountries = async (req, res) => {
  try {
    const query = ` SELECT Name, Population, LifeExpectancy
      FROM country
      WHERE LifeExpectancy IS NOT NULL
      ORDER BY LifeExpectancy ASC
      LIMIT 10`;

    const resultDB = await connection.promise().execute(query);
    res.status(200).send({ resultDB });
  } catch (err) {
    res.status(500).send({ msg: "Server Error" });
  }
};

module.exports = {
  TotalCountry,
  getTotalPouplation,
  getTotalCity,
  getContinentCountry,
  getNoContinent,
  getPopulation,
  getTopten,
  getContinentWisePop,
  getpopulationbycountry,
  getCityByName,
  getLargeestCity,
  getMiniPopulation,
  getLessPopulation,
  getlangugesbyCountry,
  getTotalLanguage,
  getTopTenLanguages,
  getAvgLifeExpectancy,
  getTopLifeExpectancyCountries,
  getLowestLifeExpectancyCountries
  
};
