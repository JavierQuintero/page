import {renderText} from "./modulos/cons.js"
import {$pC as pais,
        $p as fallecidos,
        $uR as recuperados
                } from "./modulos/elemHtml.js"

fetch('https://api.covid19api.com/summary')
.then(covidData => covidData.json())
.then(pais => pais.Countries[35])//Colombia = 35
.then(data => {
    renderText(pais, data.Country)
    renderText(fallecidos, data.TotalConfirmed)
    renderText(recuperados, data.TotalRecovered)
})
.catch(e => console.log(e));