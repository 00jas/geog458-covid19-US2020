// Map 1 main.js

mapboxgl.accessToken =
            'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/light-v10', // style URL
            projection:'albers',
            zoom: 3.5, // starting zoom
            center: [-103, 40] // starting center
        });

        // load data and add as layer
        async function geojsonFetch() {
            let response = await fetch('asset/us-covid-2020-rates.json');
            let covid_rates = await response.json();

            map.on('load', function loadingData() {
                map.addSource('covid_rates', {
                    type: 'geojson',
                    data: covid_rates
                });

                map.addLayer({
                    'id': 'covid_rates_layer',
                    'type': 'fill',
                    'source': 'covid_rates',
                    'paint': {
                        'fill-color': [
                            'step',
                            ['get', 'rates'],
                            '#FFEDA0',   // stop_output_0
                            43,          // stop_input_0
                            '#FED976',   // stop_output_1
                            66,          // stop_input_1
                            '#FEB24C',   // stop_output_2
                            89,          // stop_input_2
                            '#FD8D3C',   // stop_output_3
                            128,         // stop_input_3
                            '#FC4E2A',   // stop_output_4
                            291,         // stop_input_4
                            '#E31A1C'   // stop_output_5
                            //500,         // stop_input_5
                            //'#BD0026',   // stop_output_6
                            //1000,        // stop_input_6
                            //"#800026"    // stop_output_7
                        ],
                        'fill-outline-color': '#BBBBBB',
                        'fill-opacity': 0.7,
                    }
                });

                const layers = [
                    '0-9',
                    '10-19',
                    '20-49',
                    '50-99',
                    '100-199',
                    '200-499'
                    //'500-999',
                    //'1000 and more'
                ];
                const colors = [
                    '#FFEDA070',
                    '#FED97670',
                    '#FEB24C70',
                    '#FD8D3C70',
                    '#FC4E2A70',
                    '#E31A1C70'
                    //'#BD002670',
                    //'#80002670'
                ];

                // create legend
                const legend = document.getElementById('legend');
                const source =
                    '<p style="text-align: right; font-size:10pt">Source: <a href="https://data.census.gov/table?g=0100000US$050000&d=ACS+5-Year+Estimates+Data+Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true">2018 ACS 5 year estimates</a></p>';
                legend.innerHTML = source + "<b>Cases Per Thousand Residents<br><br>";
                

                layers.forEach((layer, i) => {
                    const color = colors[i];
                    const item = document.createElement('div');
                    const key = document.createElement('span');
                    key.className = 'legend-key';
                    key.style.backgroundColor = color;

                    const value = document.createElement('span');
                    value.innerHTML = `${layer}`;
                    item.appendChild(key);
                    item.appendChild(value);
                    legend.appendChild(item);
                });
                // // add source
                // const source =
                //     '<p style="text-align: right; font-size:10pt">Source: <a href="https://data.census.gov/table?g=0100000US$050000&d=ACS+5-Year+Estimates+Data+Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true">2018 ACS 5 year estimates</a></p>';
                // // combine all the html codes.
                // legend.innerHTML = values.join('') + source;

                //legend.innerHTML = source;
                
            });


            map.on('mousemove', ({point}) => {
                const state = map.queryRenderedFeatures(point, {
                    layers: ['covid_rates_layer']
                });
                document.getElementById('text-description').innerHTML = state.length ?
                    `<h3>${state[0].properties.state}</h3><p><strong><em>${state[0].properties.rates}</strong> cases per thousand residents</em></p>` :
                    `<p>Hover over a state!</p>`;
            });
        }

        geojsonFetch();