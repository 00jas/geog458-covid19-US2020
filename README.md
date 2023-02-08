# GEOG 458 Lab3

# Spread of COVID-19 in the United States

The name of this project is **“Spread of COVID-19 in the United States”**. As stated, we will be looking at **COVID-19 case/death data and its case rate in 2020**. Two sets of data are used in this project that are originally from [The New York TImes](https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv). The population data used to find the case rates are from the [2018 ACS 5 year estimates](https://data.census.gov/table?g=0100000US$050000&d=ACS+5-Year+Estimates+Data+Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true) at the county level. Case rate is found as cases per thousand residents. This project has also used the [U.S. county boundary](https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html) shapefile which is from the U.S. Census Bureau. Data has been cleaned and processed for this project after download. Shapefiles are properly converted to geojson data.

Two thematic maps are created in this project. A thematic map is a map with base maps, thematic layers such as choropleth, dot density, proportional symbols, and some kind of interactive features to increase interactions between map and users. Google Fonts is used on these maps, which is standard, useful online font library. For the two maps created in this project, one is a `choropleth map`, in the `map1.html` page, displaying the **Covid-19 rates**. It is an interactive choropleth web map to see more information when hovering over the states.This choropleth map uses different colors to illustrate the rate of Covid-19 in the United States. **Jenks Natural Breaks Classification** is used into **5** classes as seen on legend. It ranges from 0-499 cases per thousand residents. 

[!Map of Rates of Covid-19 in the United States](img/map1.png)

The second is a `proportional symbols map`, in the `map2.html` page, of **Covid-19 cases in the United States**. The purpose of this proportional symbols map is to show and provide proper meaning about the raw data. This map will benefit government officials and health providers to reflect on the spread and prepare for the future. Additionally, this increases legibility for users while giving the map an appealing and custom design for specific reasons. **Jenks Natural Breaks Classification** is used into **5** classes as seen on legend, from 0 - 400000 number of counts. 

[!Map of COVID-19 Counts in the United States](img/map2.png)
