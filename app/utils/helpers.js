// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";
// Geocoder API
const nytAPI = "ed100de2f9a94c4e95c299b457c72743";
// Helper Functions (in this case the only one is runQuery)
const helpers = {
  runQuery: (searchTerm, startYear, endYear) => {
    console.log(searchTerm);
    // Figure out the geolocation
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&&begin_date=" + startYear + "0101&&end_date=" + endYear + "0101&&api-key=" + nytAPI;

    return axios.get(queryURL).then((response) => {
      console.log(response);
      return response.data.results[0].formatted;
    });
  }
};
// We export the helpers function (which contains getGithubInfo)
export default helpers;