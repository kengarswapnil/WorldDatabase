const express = require('express')

const Router = express.Router();

const database = require('../controllers/databaseController.js')

Router.get('/TotalCountry',database.TotalCountry);
Router.get('/TotalP',database.getTotalPouplation);
Router.get('/totalCity' ,database.getTotalCity);
Router.get('/ContinentCountry',database.getContinentCountry);
Router.get('/ContinentNumOFCountry',database.getNoContinent);
Router.get('/max-Population',database.getPopulation);
Router.get('/Topten',database.getTopten);
Router.get('/ContinentWise',database.getContinentWisePop);
Router.get('/country-pop/:countryName',database.getpopulationbycountry)
Router.get('/city/:cityName',database.getCityByName);
Router.get('/getLargeestCity',database.getLargeestCity);
Router.get('/getMiniPop/:minpop',database.getMiniPopulation);
Router.get('/getLessPop/:lesspop',database.getLessPopulation);
Router.get('/getlanguge/:countryName',database.getlangugesbyCountry);
module.exports = Router