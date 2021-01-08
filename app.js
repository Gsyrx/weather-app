// const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const url =
//   'http://api.weatherstack.com/current?access_key=0eb1f93b4a9074ef54c45dab3c06d391&query=37.8267,-122.4233&units=f';

// request({ url: url, json: true }, (error, response) => {
//   // console.log(response);
//   // const data = JSON.parse(response.body);
//   // console.log(data.current);
//   // console.log(response.body.current);

//   // console.log(error);

//   if (error) {
//     console.log('Unable to connect to weather service');
//   } else if (response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         '. It is currently ' +
//         response.body.current.temperature +
//         ' degree out.It feels like ' +
//         response.body.current.feelslike +
//         ' degrees out.'
//     );
//   }
// });

// const geocodeURL =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ3N5cngiLCJhIjoiY2tkZWdyM3h0MjZmMjJ6czg3YnhyeG8xcSJ9._tVlx2zd9KbFzWL5hf_6BA&limit=1';

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to location services');
//   } else if (response.body.features.length === 0) {
//     console.log('Unable to find location. Try another search');
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(latitude, longitude);
//   }
// });

// geocode('Boston', (error, data) => {
//   console.log('Error', error);
//   console.log('Data', data);
// });

// forecast(44.1545, -75.7088, (error, data) => {
//   console.log('Error', error);
//   console.log('Data', data);
// });

// geocode('Boston', (error, data) => {
//   if (error) {
//     return console.log(error);
//   }

//   forecast(data.latitude, data.longitude, (error, forecastData) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log(data.location);
//     console.log(forecastData);
//   });
// });

// const address = process.argv[2];

// if (!address) {
//   console.log('Please provide an address');
// } else {
//   geocode(address, (error, data) => {
//     if (error) {
//       return console.log(error);
//     }

//     forecast(data.latitude, data.longitude, (error, forecastData) => {
//       if (error) {
//         return console.log(error);
//       }
//       console.log(data.location);
//       console.log(forecastData);
//     });
//   });
// }
// <-- Destructuring -->

const address = process.argv[2];

if (!address) {
  console.log('Please provide an address');
} else {
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
