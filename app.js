const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=0eb1f93b4a9074ef54c45dab3c06d391&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
  // console.log(response);
  // const data = JSON.parse(response.body);
  // console.log(data.current);
  // console.log(response.body.current);
  console.log(
    response.body.current.weather_descriptions[0] +
      '. It is currently ' +
      response.body.current.temperature +
      ' degree out.It feels like ' +
      response.body.current.feelslike +
      ' degrees out.'
  );
});
