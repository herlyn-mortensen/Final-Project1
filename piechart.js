const countryPicker = document.querySelector("#pick-country");
async function loadData() {
    let response = await axios.get('https://covid-api.mmediagroup.fr/v1/vaccines');
    console.log(response.data)
    return response.data
  }


  async function getVaccinatedData(country) {
    let jsonData = await loadData()


    let options = undefined
    let element = document.getElementById("noData")
    let chartDiv = document.querySelector(".chartDiv")
    chartDiv.innerHTML = ""
    if (jsonData.hasOwnProperty(country) && jsonData[country].hasOwnProperty('All')) {
        element.classList.add('hide')
        chartDiv.classList.remove('hide')
        let vaccinated = jsonData[country]['All']['people_vaccinated']
        let partially_vaccinated = jsonData[country]['All']['people_partially_vaccinated']
        let population = jsonData[country]['All']['population']
        let unvaccinated = population - vaccinated
        
        options = {
            'chart':{
                'type':'pie',
                'height':'100%',
                'width':'100%',
            },
            'series':[vaccinated, partially_vaccinated, unvaccinated],
            'labels':["Vaccinated", "Partially Vaccinated", "Unvaccinated"],
            'colors':['#cdcdf7', '#fbb3cf', '#c14953']
        }
        const chart = new ApexCharts(
            document.querySelector('.chartDiv'),
            options
        )
        
       
        await chart.render();
        

    } else {
        element.classList.remove('hide')
        chartDiv.classList.add('hide')
                }
            }

  countryPicker.addEventListener("change", () => {
    var select = document.getElementById('pick-country');
    var value = select.options[select.selectedIndex].value;
    getVaccinatedData(value);
});
