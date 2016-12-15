Final Project: Interactive US City Map with Routes and Recommendations
===

Team members
---

Alexander Huot, Khoi Doan, Andrew Petit

Description
---

The project is an interactive map of the United States with some of the major cities. Clicking on two cities will display the route between them as provided by the Google Maps API. Information about the route (also provided by the API) and the two cities clicked will also display. The users can save the selected route and it would show up if they choose to load it later.

All information about the cities (name, coordinates, information) is stored client-side. Data is visualized using d3.js. The server uses ExpressJS to serve the files as well as handling the client's requests for data of the routes by querying the Google Maps API, since browsers by default cannot make external requests.

