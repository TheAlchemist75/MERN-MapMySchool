const axios = require("axios");
const Data = require("../models/Data");

const API_URLS = {
  jugendberufshilfen:
    "https://services6.arcgis.com/jiszdsDupTUO3fSM/arcgis/rest/services/Jugendberufshilfen_FL_1/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
  kindertageseinrichtungen:
    "https://services6.arcgis.com/jiszdsDupTUO3fSM/arcgis/rest/services/Kindertageseinrichtungen_Sicht/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
  schulsozialarbeit:
    "https://services6.arcgis.com/jiszdsDupTUO3fSM/arcgis/rest/services/Schulsozialarbeit_FL_1/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
  schulen:
    "https://services6.arcgis.com/jiszdsDupTUO3fSM/arcgis/rest/services/Schulen_OpenData/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
};

const fetchData = async (req, res) => {
  try {
    // Delete existing data
    await Data.deleteMany();

    // Fetch data from APIs
    for (const [type, url] of Object.entries(API_URLS)) {
      const response = await axios.get(url);
      const data = new Data({ type, features: response.data.features });
      await data.save();
    }

    res.status(200).json({ message: "Data fetched and saved" });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
};

const getData = async (req, res) => {
  try {
    const { type } = req.params;
    const data = await Data.findOne({ type });
    res.status(200).json(data);
  } catch (error) {
    console.error("Error getting data:", error);
    res.status(500).json({ message: "Error getting data" });
  }
};

module.exports = { fetchData, getData };
