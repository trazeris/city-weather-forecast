import { rest } from 'msw';

// Mock Data
export const entireOneCallResponse = {
  lat: 43.2487,
  lon: 3.2923,
  timezone: 'Europe/Paris',
  timezone_offset: 7200,
  current: {
    dt: 1680613171,
    sunrise: 1680585845,
    sunset: 1680632125,
    temp: 14.82,
    feels_like: 13.4,
    pressure: 1015,
    humidity: 40,
    dew_point: 1.36,
    uvi: 4.6,
    clouds: 0,
    visibility: 10000,
    wind_speed: 3.6,
    wind_deg: 140,
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
    ],
  },
  minutely: [
    { dt: 1680613200, precipitation: 0 },
    { dt: 1680613260, precipitation: 0 },
    { dt: 1680613320, precipitation: 0 },
    { dt: 1680613380, precipitation: 0 },
    { dt: 1680613440, precipitation: 0 },
    { dt: 1680613500, precipitation: 0 },
    { dt: 1680613560, precipitation: 0 },
    { dt: 1680613620, precipitation: 0 },
    { dt: 1680613680, precipitation: 0 },
    { dt: 1680613740, precipitation: 0 },
    { dt: 1680613800, precipitation: 0 },
    { dt: 1680613860, precipitation: 0 },
    { dt: 1680613920, precipitation: 0 },
    { dt: 1680613980, precipitation: 0 },
    { dt: 1680614040, precipitation: 0 },
    { dt: 1680614100, precipitation: 0 },
    { dt: 1680614160, precipitation: 0 },
    { dt: 1680614220, precipitation: 0 },
    { dt: 1680614280, precipitation: 0 },
    { dt: 1680614340, precipitation: 0 },
    { dt: 1680614400, precipitation: 0 },
    { dt: 1680614460, precipitation: 0 },
    { dt: 1680614520, precipitation: 0 },
    { dt: 1680614580, precipitation: 0 },
    { dt: 1680614640, precipitation: 0 },
    { dt: 1680614700, precipitation: 0 },
    { dt: 1680614760, precipitation: 0 },
    { dt: 1680614820, precipitation: 0 },
    { dt: 1680614880, precipitation: 0 },
    { dt: 1680614940, precipitation: 0 },
    { dt: 1680615000, precipitation: 0 },
    { dt: 1680615060, precipitation: 0 },
    { dt: 1680615120, precipitation: 0 },
    { dt: 1680615180, precipitation: 0 },
    { dt: 1680615240, precipitation: 0 },
    { dt: 1680615300, precipitation: 0 },
    { dt: 1680615360, precipitation: 0 },
    { dt: 1680615420, precipitation: 0 },
    { dt: 1680615480, precipitation: 0 },
    { dt: 1680615540, precipitation: 0 },
    { dt: 1680615600, precipitation: 0 },
    { dt: 1680615660, precipitation: 0 },
    { dt: 1680615720, precipitation: 0 },
    { dt: 1680615780, precipitation: 0 },
    { dt: 1680615840, precipitation: 0 },
    { dt: 1680615900, precipitation: 0 },
    { dt: 1680615960, precipitation: 0 },
    { dt: 1680616020, precipitation: 0 },
    { dt: 1680616080, precipitation: 0 },
    { dt: 1680616140, precipitation: 0 },
    { dt: 1680616200, precipitation: 0 },
    { dt: 1680616260, precipitation: 0 },
    { dt: 1680616320, precipitation: 0 },
    { dt: 1680616380, precipitation: 0 },
    { dt: 1680616440, precipitation: 0 },
    { dt: 1680616500, precipitation: 0 },
    { dt: 1680616560, precipitation: 0 },
    { dt: 1680616620, precipitation: 0 },
    { dt: 1680616680, precipitation: 0 },
    { dt: 1680616740, precipitation: 0 },
    { dt: 1680616800, precipitation: 0 },
  ],
  hourly: [
    {
      dt: 1680609600,
      temp: 15.02,
      feels_like: 13.54,
      pressure: 1015,
      humidity: 37,
      dew_point: 0.46,
      uvi: 5.04,
      clouds: 6,
      visibility: 10000,
      wind_speed: 2.25,
      wind_deg: 338,
      wind_gust: 5.55,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680613200,
      temp: 14.82,
      feels_like: 13.4,
      pressure: 1015,
      humidity: 40,
      dew_point: 1.36,
      uvi: 4.6,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.65,
      wind_deg: 314,
      wind_gust: 6.6,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680616800,
      temp: 15.27,
      feels_like: 13.82,
      pressure: 1015,
      humidity: 37,
      dew_point: 0.68,
      uvi: 3.48,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.63,
      wind_deg: 300,
      wind_gust: 7.92,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680620400,
      temp: 15.58,
      feels_like: 14.13,
      pressure: 1015,
      humidity: 36,
      dew_point: 0.58,
      uvi: 2.15,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.56,
      wind_deg: 69,
      wind_gust: 7.57,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680624000,
      temp: 14.3,
      feels_like: 12.8,
      pressure: 1015,
      humidity: 39,
      dew_point: 0.54,
      uvi: 1.04,
      clouds: 0,
      visibility: 10000,
      wind_speed: 5.18,
      wind_deg: 121,
      wind_gust: 5.18,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680627600,
      temp: 13.8,
      feels_like: 12.25,
      pressure: 1016,
      humidity: 39,
      dew_point: 0.1,
      uvi: 0.33,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.64,
      wind_deg: 117,
      wind_gust: 2.96,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680631200,
      temp: 12.96,
      feels_like: 11.38,
      pressure: 1017,
      humidity: 41,
      dew_point: -0.23,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.49,
      wind_deg: 180,
      wind_gust: 2.37,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680634800,
      temp: 12.63,
      feels_like: 11.1,
      pressure: 1018,
      humidity: 44,
      dew_point: 0.66,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.26,
      wind_deg: 222,
      wind_gust: 3.11,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      pop: 0,
    },
    {
      dt: 1680638400,
      temp: 12.32,
      feels_like: 10.83,
      pressure: 1018,
      humidity: 47,
      dew_point: 1.28,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.05,
      wind_deg: 268,
      wind_gust: 3.87,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      pop: 0,
    },
    {
      dt: 1680642000,
      temp: 11.71,
      feels_like: 10.22,
      pressure: 1019,
      humidity: 49,
      dew_point: 1.36,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.34,
      wind_deg: 300,
      wind_gust: 5.76,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      pop: 0,
    },
    {
      dt: 1680645600,
      temp: 10.84,
      feels_like: 9.34,
      pressure: 1019,
      humidity: 52,
      dew_point: 1.2,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.56,
      wind_deg: 316,
      wind_gust: 5.91,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      pop: 0,
    },
    {
      dt: 1680649200,
      temp: 10.05,
      feels_like: 8.47,
      pressure: 1019,
      humidity: 52,
      dew_point: 0.49,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.39,
      wind_deg: 326,
      wind_gust: 5.3,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      pop: 0,
    },
    {
      dt: 1680652800,
      temp: 9.4,
      feels_like: 7.71,
      pressure: 1019,
      humidity: 51,
      dew_point: -0.44,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.14,
      wind_deg: 319,
      wind_gust: 4.66,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      pop: 0,
    },
    {
      dt: 1680656400,
      temp: 8.84,
      feels_like: 7.16,
      pressure: 1019,
      humidity: 51,
      dew_point: -0.9,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.94,
      wind_deg: 315,
      wind_gust: 4.26,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      pop: 0,
    },
    {
      dt: 1680660000,
      temp: 8.21,
      feels_like: 6.25,
      pressure: 1019,
      humidity: 53,
      dew_point: -0.91,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.18,
      wind_deg: 298,
      wind_gust: 4.39,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      pop: 0,
    },
    {
      dt: 1680663600,
      temp: 7.65,
      feels_like: 5.53,
      pressure: 1019,
      humidity: 53,
      dew_point: -1.27,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.26,
      wind_deg: 310,
      wind_gust: 4.37,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      pop: 0,
    },
    {
      dt: 1680667200,
      temp: 7.17,
      feels_like: 5.09,
      pressure: 1019,
      humidity: 52,
      dew_point: -1.97,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.03,
      wind_deg: 306,
      wind_gust: 4.03,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      pop: 0,
    },
    {
      dt: 1680670800,
      temp: 6.85,
      feels_like: 4.45,
      pressure: 1019,
      humidity: 53,
      dew_point: -2.06,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.43,
      wind_deg: 299,
      wind_gust: 4.67,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      pop: 0,
    },
    {
      dt: 1680674400,
      temp: 6.7,
      feels_like: 4.19,
      pressure: 1019,
      humidity: 56,
      dew_point: -1.72,
      uvi: 0.13,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.57,
      wind_deg: 297,
      wind_gust: 4.9,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680678000,
      temp: 7.79,
      feels_like: 5.39,
      pressure: 1019,
      humidity: 54,
      dew_point: -1.06,
      uvi: 0.59,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.81,
      wind_deg: 293,
      wind_gust: 5.12,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680681600,
      temp: 9.76,
      feels_like: 7.78,
      pressure: 1020,
      humidity: 47,
      dew_point: -1.15,
      uvi: 1.54,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.84,
      wind_deg: 288,
      wind_gust: 5.09,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680685200,
      temp: 12.25,
      feels_like: 10.5,
      pressure: 1019,
      humidity: 37,
      dew_point: -2.29,
      uvi: 2.89,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.89,
      wind_deg: 296,
      wind_gust: 5.58,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680688800,
      temp: 14.17,
      feels_like: 12.43,
      pressure: 1019,
      humidity: 30,
      dew_point: -3.36,
      uvi: 4.25,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.03,
      wind_deg: 329,
      wind_gust: 4.59,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680692400,
      temp: 15.34,
      feels_like: 13.63,
      pressure: 1018,
      humidity: 27,
      dew_point: -4.19,
      uvi: 5.24,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.31,
      wind_deg: 37,
      wind_gust: 3.9,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680696000,
      temp: 16.19,
      feels_like: 14.57,
      pressure: 1018,
      humidity: 27,
      dew_point: -3.98,
      uvi: 5.49,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.85,
      wind_deg: 66,
      wind_gust: 4.26,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680699600,
      temp: 16.3,
      feels_like: 14.74,
      pressure: 1018,
      humidity: 29,
      dew_point: -2.93,
      uvi: 4.97,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.28,
      wind_deg: 71,
      wind_gust: 4.66,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680703200,
      temp: 16.54,
      feels_like: 15.03,
      pressure: 1017,
      humidity: 30,
      dew_point: -2.59,
      uvi: 3.75,
      clouds: 0,
      visibility: 10000,
      wind_speed: 0.48,
      wind_deg: 95,
      wind_gust: 4.36,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680706800,
      temp: 16.9,
      feels_like: 15.4,
      pressure: 1017,
      humidity: 29,
      dew_point: -2.17,
      uvi: 2.32,
      clouds: 0,
      visibility: 10000,
      wind_speed: 0.81,
      wind_deg: 315,
      wind_gust: 4.77,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680710400,
      temp: 16.83,
      feels_like: 15.38,
      pressure: 1017,
      humidity: 31,
      dew_point: -1.41,
      uvi: 1.11,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.71,
      wind_deg: 285,
      wind_gust: 4.89,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680714000,
      temp: 16.19,
      feels_like: 14.78,
      pressure: 1017,
      humidity: 35,
      dew_point: 0.25,
      uvi: 0.36,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.83,
      wind_deg: 250,
      wind_gust: 5.09,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680717600,
      temp: 14.87,
      feels_like: 13.48,
      pressure: 1017,
      humidity: 41,
      dew_point: 1.38,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.47,
      wind_deg: 254,
      wind_gust: 6.77,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      pop: 0,
    },
    {
      dt: 1680721200,
      temp: 13.76,
      feels_like: 12.37,
      pressure: 1018,
      humidity: 45,
      dew_point: 1.76,
      uvi: 0,
      clouds: 4,
      visibility: 10000,
      wind_speed: 3.47,
      wind_deg: 275,
      wind_gust: 7.99,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      pop: 0,
    },
    {
      dt: 1680724800,
      temp: 12.6,
      feels_like: 11.17,
      pressure: 1019,
      humidity: 48,
      dew_point: 1.83,
      uvi: 0,
      clouds: 6,
      visibility: 10000,
      wind_speed: 3.29,
      wind_deg: 311,
      wind_gust: 7.24,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      pop: 0,
    },
    {
      dt: 1680728400,
      temp: 11.53,
      feels_like: 10.07,
      pressure: 1019,
      humidity: 51,
      dew_point: 1.82,
      uvi: 0,
      clouds: 7,
      visibility: 10000,
      wind_speed: 3.17,
      wind_deg: 341,
      wind_gust: 5.7,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      pop: 0,
    },
    {
      dt: 1680732000,
      temp: 11.05,
      feels_like: 9.62,
      pressure: 1019,
      humidity: 54,
      dew_point: 2.06,
      uvi: 0,
      clouds: 7,
      visibility: 10000,
      wind_speed: 2.43,
      wind_deg: 350,
      wind_gust: 4.1,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      pop: 0,
    },
    {
      dt: 1680735600,
      temp: 10.74,
      feels_like: 9.33,
      pressure: 1019,
      humidity: 56,
      dew_point: 2.37,
      uvi: 0,
      clouds: 17,
      visibility: 10000,
      wind_speed: 1.69,
      wind_deg: 330,
      wind_gust: 2.76,
      weather: [
        { id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' },
      ],
      pop: 0,
    },
    {
      dt: 1680739200,
      temp: 10.28,
      feels_like: 8.85,
      pressure: 1020,
      humidity: 57,
      dew_point: 2.05,
      uvi: 0,
      clouds: 26,
      visibility: 10000,
      wind_speed: 2.16,
      wind_deg: 319,
      wind_gust: 2.64,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1680742800,
      temp: 10.06,
      feels_like: 8.58,
      pressure: 1019,
      humidity: 56,
      dew_point: 1.64,
      uvi: 0,
      clouds: 98,
      visibility: 10000,
      wind_speed: 2.28,
      wind_deg: 324,
      wind_gust: 2.69,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1680746400,
      temp: 9.74,
      feels_like: 8.53,
      pressure: 1019,
      humidity: 56,
      dew_point: 1.3,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 2.48,
      wind_deg: 323,
      wind_gust: 2.89,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1680750000,
      temp: 9.22,
      feels_like: 7.84,
      pressure: 1019,
      humidity: 56,
      dew_point: 0.95,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 2.59,
      wind_deg: 318,
      wind_gust: 3.1,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1680753600,
      temp: 8.92,
      feels_like: 7.51,
      pressure: 1019,
      humidity: 56,
      dew_point: 0.61,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 2.55,
      wind_deg: 324,
      wind_gust: 3.14,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1680757200,
      temp: 8.47,
      feels_like: 7.19,
      pressure: 1019,
      humidity: 56,
      dew_point: 0.28,
      uvi: 0,
      clouds: 97,
      visibility: 10000,
      wind_speed: 2.26,
      wind_deg: 318,
      wind_gust: 2.84,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1680760800,
      temp: 8.71,
      feels_like: 7.63,
      pressure: 1020,
      humidity: 55,
      dew_point: 0.2,
      uvi: 0.1,
      clouds: 98,
      visibility: 10000,
      wind_speed: 2.07,
      wind_deg: 319,
      wind_gust: 2.67,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1680764400,
      temp: 9.59,
      feels_like: 8.7,
      pressure: 1020,
      humidity: 52,
      dew_point: 0.01,
      uvi: 0.54,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.02,
      wind_deg: 322,
      wind_gust: 2.45,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1680768000,
      temp: 10.83,
      feels_like: 9.22,
      pressure: 1020,
      humidity: 48,
      dew_point: 0.07,
      uvi: 1.4,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.85,
      wind_deg: 319,
      wind_gust: 2.51,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1680771600,
      temp: 12.67,
      feels_like: 11.09,
      pressure: 1021,
      humidity: 42,
      dew_point: 0.08,
      uvi: 2.62,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.01,
      wind_deg: 326,
      wind_gust: 2.06,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1680775200,
      temp: 14.22,
      feels_like: 12.69,
      pressure: 1021,
      humidity: 38,
      dew_point: -0.18,
      uvi: 3.94,
      clouds: 96,
      visibility: 10000,
      wind_speed: 0.89,
      wind_deg: 86,
      wind_gust: 1.92,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1680778800,
      temp: 14.96,
      feels_like: 13.48,
      pressure: 1020,
      humidity: 37,
      dew_point: 0.05,
      uvi: 4.85,
      clouds: 82,
      visibility: 10000,
      wind_speed: 2.35,
      wind_deg: 129,
      wind_gust: 2.15,
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' },
      ],
      pop: 0,
    },
  ],
  daily: [
    {
      dt: 1680606000,
      sunrise: 1680585845,
      sunset: 1680632125,
      moonrise: 1680626160,
      moonset: 1680584160,
      moon_phase: 0.44,
      temp: {
        day: 14.56,
        min: 6.72,
        max: 15.58,
        night: 11.71,
        eve: 13.8,
        morn: 6.85,
      },
      feels_like: { day: 12.96, night: 10.22, eve: 12.25, morn: 4.78 },
      pressure: 1015,
      humidity: 34,
      dew_point: -0.98,
      wind_speed: 5.18,
      wind_deg: 320,
      wind_gust: 8.95,
      weather: [
        { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
      ],
      clouds: 14,
      pop: 0,
      uvi: 5.04,
    },
    {
      dt: 1680692400,
      sunrise: 1680672140,
      sunset: 1680718595,
      moonrise: 1680716520,
      moonset: 1680671700,
      moon_phase: 0.47,
      temp: {
        day: 16.34,
        min: 6.7,
        max: 16.9,
        night: 11.53,
        eve: 16.19,
        morn: 6.85,
      },
      feels_like: { day: 13.63, night: 10.07, eve: 14.78, morn: 4.45 },
      pressure: 1018,
      humidity: 27,
      dew_point: -4.19,
      wind_speed: 3.89,
      wind_deg: 296,
      wind_gust: 7.99,
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      clouds: 0,
      pop: 0,
      uvi: 5.49,
    },
    {
      dt: 1680778800,
      sunrise: 1680758434,
      sunset: 1680805065,
      moonrise: 1680806940,
      moonset: 1680759240,
      moon_phase: 0.5,
      temp: {
        day: 14.96,
        min: 8.47,
        max: 16.31,
        night: 13.16,
        eve: 15.74,
        morn: 8.47,
      },
      feels_like: { day: 13.48, night: 11.94, eve: 14.6, morn: 7.19 },
      pressure: 1020,
      humidity: 37,
      dew_point: 0.05,
      wind_speed: 4.82,
      wind_deg: 289,
      wind_gust: 8.56,
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' },
      ],
      clouds: 82,
      pop: 0,
      uvi: 5.09,
    },
    {
      dt: 1680865200,
      sunrise: 1680844730,
      sunset: 1680891535,
      moonrise: 1680897540,
      moonset: 1680846840,
      moon_phase: 0.54,
      temp: {
        day: 18.95,
        min: 9.8,
        max: 20.19,
        night: 14.02,
        eve: 17.58,
        morn: 9.8,
      },
      feels_like: { day: 17.87, night: 13.07, eve: 16.54, morn: 8.36 },
      pressure: 1016,
      humidity: 37,
      dew_point: 3.15,
      wind_speed: 3.67,
      wind_deg: 310,
      wind_gust: 7.28,
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' },
      ],
      clouds: 74,
      pop: 0,
      uvi: 5.24,
    },
    {
      dt: 1680951600,
      sunrise: 1680931026,
      sunset: 1680978005,
      moonrise: 1680988320,
      moonset: 1680934620,
      moon_phase: 0.57,
      temp: {
        day: 16.97,
        min: 10.07,
        max: 18.41,
        night: 13.9,
        eve: 15.29,
        morn: 10.07,
      },
      feels_like: { day: 15.51, night: 12.52, eve: 13.87, morn: 8.7 },
      pressure: 1018,
      humidity: 30,
      dew_point: -1.97,
      wind_speed: 2.97,
      wind_deg: 165,
      wind_gust: 4.4,
      weather: [
        { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
      ],
      clouds: 18,
      pop: 0,
      uvi: 5.76,
    },
    {
      dt: 1681038000,
      sunrise: 1681017322,
      sunset: 1681064475,
      moonrise: 0,
      moonset: 1681022700,
      moon_phase: 0.61,
      temp: {
        day: 15.92,
        min: 9.96,
        max: 15.92,
        night: 12.74,
        eve: 13.69,
        morn: 9.96,
      },
      feels_like: { day: 14.64, night: 11.69, eve: 12.73, morn: 9.59 },
      pressure: 1020,
      humidity: 41,
      dew_point: 2.36,
      wind_speed: 5.09,
      wind_deg: 168,
      wind_gust: 5.19,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: 43,
      pop: 0,
      uvi: 6,
    },
    {
      dt: 1681124400,
      sunrise: 1681103619,
      sunset: 1681150945,
      moonrise: 1681079160,
      moonset: 1681111320,
      moon_phase: 0.64,
      temp: {
        day: 18.39,
        min: 10.15,
        max: 18.39,
        night: 15.39,
        eve: 17.34,
        morn: 10.15,
      },
      feels_like: { day: 17.25, night: 14.32, eve: 16.3, morn: 8.81 },
      pressure: 1020,
      humidity: 37,
      dew_point: 2.46,
      wind_speed: 6.64,
      wind_deg: 294,
      wind_gust: 12.48,
      weather: [
        { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
      ],
      clouds: 24,
      pop: 0,
      uvi: 6,
    },
    {
      dt: 1681210800,
      sunrise: 1681189916,
      sunset: 1681237415,
      moonrise: 1681170000,
      moonset: 1681200420,
      moon_phase: 0.68,
      temp: {
        day: 17.84,
        min: 12.31,
        max: 19.64,
        night: 13.98,
        eve: 16.58,
        morn: 12.31,
      },
      feels_like: { day: 16.8, night: 12.87, eve: 15.6, morn: 11.37 },
      pressure: 1023,
      humidity: 43,
      dew_point: 4.94,
      wind_speed: 9.2,
      wind_deg: 309,
      wind_gust: 14.33,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: 98,
      pop: 0.07,
      uvi: 6,
    },
  ],
};

export const entireDirectResponse = [
  {
    name: 'Brest',
    local_names: {
      el: 'Βρέστη',
      th: 'แบร็สต์',
      uk: 'Брест',
      ur: 'بریسٹ',
      hi: 'ब्रैस्त',
      sr: 'Брест',
      bo: 'བེ་རེ་སི་ཊི',
      lt: 'Brestas',
      kn: 'ಬ್ರೆಸ್ಟ್',
      ja: 'ブレスト',
      bg: 'Брест',
      lv: 'Bresta',
      mr: 'ब्रेस्त',
      zh: '布雷斯特',
      ar: 'بريست',
      fa: 'برست',
      ru: 'Брест',
      la: 'Brestia',
      eo: 'Brest',
      br: 'Brest',
      fr: 'Brest',
      he: 'ברסט',
      ko: '브레스트',
      ka: 'ბრესტი',
      be: 'Брэст',
      ta: 'பிரெஸ்ட்',
      oc: 'Brèst',
      kk: 'Брест',
      mk: 'Брест',
    },
    lat: 48.3905283,
    lon: -4.4860088,
    country: 'FR',
    state: 'Brittany',
  },
];

// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  rest.get(
    'https://api.openweathermap.org/data/2.5/onecall',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(entireOneCallResponse));
    },
  ),
  rest.get('https://api.openweathermap.org/geo/1.0/direct', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(entireDirectResponse));
  }),
];
