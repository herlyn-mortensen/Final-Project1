const countrysSelectELement = document.querySelector("#select-country");
const genericCountryPicker = document.querySelector(".countryInput");
let currentCountry;
const chartDiv = document.querySelector(".chartDiv");
const graphDiv = document.querySelector(".graphDiv")
let countries = []
let recordDate = []


function displayChart(data) {
    let reverseData = data.reverse()
    const dailyCases = reverseData.map((daily, index) => {
        return Math.abs(daily.Confirmed)
    }).splice(1, 20);
    TotalConfirmed = dailyCases.reverse()

    const dateCases = reverseData.map((daily, index) => {
        return daily.Date
    }).splice(1, 20).reverse();
    recordDate = moment(dateCases).format('YYYY-MM-DDTHH')

    console.log(data)
    var options = {
        series: [{
            name: 'cases',
            data: TotalConfirmed
        }],
        chart: {
            type: 'area',
            height: '500px',
        },
        stroke: {
            curve: 'smooth'
          },

        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: dateCases,
        },
    }

    const chart = new ApexCharts(document.querySelector(".chartDiv"), options);

    chart.render();
}


function getCovidData(country) {

    axios.get(`https://api.covid19api.com/total/dayone/country/${country}`)
        .then(response => (response.data))
        .then(data => {
            chartDiv.innerHTML = "";
            displayChart(data);
        })
        .catch(err => console.warn(err));


}

function getCountries() {
    axios.get("https://api.covid19api.com/countries")
         .then(response => (response.data))
         .then(countries => {
            let unsorted = countries.map(country => {
                  return country.Country;
              });
              let sortedCountries = unsorted.sort()
              sortedCountries.map(country => {
                  const countryName = country;
                  const option = document.createElement("option");
                  option.setAttribute("value", countryName);
                  option.innerHTML = countryName;
                //   countrysSelectELement.appendChild(option);
                  genericCountryPicker.appendChild(option);
              });
              currentCountry = countrysSelectELement.children[0].value;
              getCovidData(currentCountry);
          })
          .catch(err => console.warn(err));
}

getCountries();

countrysSelectELement.addEventListener("change", () => {
    const currentIndex = countrysSelectELement.selectedIndex;
    const countrySelected = countrysSelectELement.children[currentIndex].value;
    currentCountry = countrySelected;
    getCovidData(countrySelected);
});