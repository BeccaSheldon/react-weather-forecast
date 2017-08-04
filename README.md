This is a little app that gets a weekly weather forecast for a user-entered city. It uses Webpack 3, Babel, React, and the OpenWeather API.

## Intention:
- Set up a React app environment
- Pass state and props betweem components (this is very different from Vue - still getting the hang of it)
- Compose higher-order components (See api notes)
- Set up SVG's as components then reuse
- Animate SVG components

##  Design:
- Very simple but there are some microinteractions and animations.
- Clear UX for searching, filtering, paginating, and understanding when there aren't any results.
- Responsive.

##  Logic:
- The app will initially try to get your location and display the current weather for your city.
- It will make another API call for forecast data after a user enters a city and clicks the search icon.
- * Autosearch / keyon might be better UX than a button click

## Api Notes:
The `handleSubmit()` function in `~/src/components/complex/Forecast.jsx` needs to be refactored into an external component function. This would make it more functional and reusable which would cut down on code in `~/src/components/complex/Start.jsx` which uses a variation of this function. Need to understand setting state with functions better because currently having trouble getting the function results to return to the component state. See `~/src/components/complex/Api.jsx` for first attempt.

## Running Locally:
1. Clone
2. `yarn` or `npm install`
3. `npm start` or `node_modules/.bin/webpack-dev-server` for hot reloading

## Screenshot:
![](screenshot.png)

#
####  Thanks for taking the time to check out this repo and README.<3
#