# CITY WEATHER FORECAST [![Netlify Status](https://api.netlify.com/api/v1/badges/3edc0c49-16db-40aa-acc0-b3b4689b6c35/deploy-status)](https://app.netlify.com/sites/weathercityforecast/deploys)

A simple application to display city weather forecast.

Features:

- Display some cities locations on a map
- On click on a city pin, display the next 3 days temperature forecast
- Deploy all this stack using docker and docker-compose

**This branch is deployed on https://mfi--weathercityforecast.netlify.app/**

## Development

This project uses Vite, and requires node 14.18+.

Please run `npm install` after checkout in the root folder.

### Run server

Run `npm run dev` dev server will run on localhost:5173

### Tests and coverage

Tests:
`npm run test`

Coverage (will also create a ./coverage folder)
`npm run coverage`

### Build

`npm run build` will create the bundle and all necessary files in /dist

## Production

You can launch a containerized version of the app by running `docker compose up`, the server will listen on port 80.
