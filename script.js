import http from 'k6/http';

export const options = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '5m', target: 100 },
  ],
};

export default function () {
  const res1 = http.get('http://veronblg.local/WeatherForecast/');
}