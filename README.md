# Final-Project1

### PROJECT OVERVIEW

Data is crucial not just for assessing the global impact of COVID-19, but also for informing appropriate reaction, planning, and resource allocation. The pandemic has highlighted the value of data more than anything else.

Covid-19 Updates aims to provide updated data of confirmed Covid-19 cases and vaccine rate per country. It can cater to the general public users, the government, especially the tourism sector. Given that data organization is its foundation, it would deliver a systematized flow of information to the user. As a result, it helps provide information about how a country is doing in terms of the Corona virus infection and protection. 

The data structure should be easy to understand for general public users, and the site should be able to provide country filters, a bar chart for confirmed cases, and a pie chart for vaccine rates - stating the completely vaccinated, partially vaccinated, and non-vaccinated per country.

**LIVE SITE [DEMO](https://herlyn-mortensen.github.io/Final-Project1/)** :tent:

### FIVE PLANES OF UX/UI

**FIGMA [LINK](https://www.figma.com/file/TDyAQ5QuwsHfsVkufzZtzk/Project-1?node-id=0%3A1)** :circus_tent:

1. Strategy
- The site exists to give Covid-19 updates, specifically the number of confirmed cases per day and vaccine rates per country. Data should be both accessible for website and mobile use.
2. Scope
- The site gives the number of confirmed cases a day per country, as well as the percentage of fully vaccinated, partially vaccinated and unvaccinated per country.
- Users can select which country they want to check.
3. Structure
- Sites contain live data of Covid-19 confirmed cases and vaccine rates.
- The confirmed cases data can be viewed when clicking the “Check Countries” button on the start page, which can then be filtered by selecting which country the user wants to check.
- Vaccine updates can be viewed on the navigation bar.
- Information about the symptoms as well as prevention can also be found in the navigation bar.
4. Skeleton
- Elements are designed on multiple pages format with navigation bar.
- Users will first see a landing page with the website logo and illustration up front.
- Users will also see a navigation bar with the website logo. Navigation bar turns into a burger button for mobile use.
- Vaccine update page on the navigation bar contains data about the vaccination percentage rate per country.
- Symptoms page on the navigation bar contains text information about symptoms of Covid-19.
- Prevention page on the navigation bar contains text information about preventive measures towards Covid-19.
- Information and data are all easy to navigate and view as it follows proper website format. 
5. Surface
- Fonts used are Abril Fatface and Poppins as the ease of reading is the most important.
- Red color signifies virus and alertness. It was used for the primary color of the site/app.
- Font awesome icons are also used to designate specific elements such as green bullet check points.
- Illustrations are also used to convey the text information better.


### FEATURES

The interactive charts on the site are the major feature, allowing the visitor to observe different numeric data on Covid-19 instances and vaccine rate. It also has a drop down menu where you may select different countries and project data from the selected one.

With pending implementations, the site has plans on adding a global map feature with colors contrasts and descriptions that shows which countries have high covid rates, high vaccine rates and travel information. It can also feature the latest news and articles on potential new vaccines and developments against Covid-19 as well as other potential new viruses and variants. 

For the bugs and limitations, I find that I can’t create a default country that the chart can show before I even select another country on the drop down menu.

### USER STORIES


| USER STORIES | ACCEPTANCE CRITERIA(S) |
| ---- | ----- |
| As a researcher, I would like to see how a country is managing the pandemic and gather data for my own research.| Charts displayed must be able to update based on a range of days. |
| As a government agent, I would like to see the different sets of Covid-19 data collected and updated so that I can use it as a basis for preventive measures and decisions towards new policy and/or policy changes in terms of public health.| Site should provide visualization from data collected in the form of a chart, wherein it is easy to comprehend.|
| As a tourist, I would like to see the active Covid-19 cases and vaccine rate of the country I am interested in so that I would know if I can travel safely without certain limitations.| Pie charts displayed are filtered by country and show the percentages of people vaccinated and partially vaccinated.|
|As a citizen, I would like to see my own country's progress in fighting Covid-19 and show whenever I should begin taking necessary health measures when I see the cases increasing.| Charts displayed should be easy for users to comprehend.|

### TECHNOLOGIES USED

- HTML is used to host website content.
- CSS and Bootstrap for designing the website.
- Javascript is primarily used for apex chart functionalities such as filtering and mapping data.
- Font Awesome for the icons used.
- Google Fonts for the font.
- AJAX queries handled by AXIOS.
- ApexCharts is responsible for all of the graphs and charts displayed.
- Git desktop was used for pushing the changes and developments I made for the repository.
- The repository is hosted on GitHub.
- Visual Studio Code is used for code editing, and a local server is used.

### TEST CASES

| CATERGORY | INPUT/ACTIONS | OUTPUT/ERRORS|
| :---: | :---: | :---:|
| OVERALL | Mobile Responsive Check | Charts are responsive with change of screen sizes.|
| CHART FUNCTION | On load | Displays empty chart structure, does not show any default country.|
| | Dropdown button filtering | Show different countries with different data.|
| | | Shows the correct data per country.|
| | Hovering across the chart. | Will show numeric data of the chart.|
| Nav Bar | Hover | Arrow turns to a pointer icon.|
| | On press | User is led to another page. Single page application is applied on the first page, symptoms and prevention page.|
| | Responsive | Navigation bar turns into a burger icon.|
