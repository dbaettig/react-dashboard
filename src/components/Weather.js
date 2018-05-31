import React from 'react';
import sunny from '../images/sunny.png'
import littlecloudy from '../images/littlecloudy.png'
import cloudy from '../images/cloudy.png'
import rainy from '../images/rainy.png'
import snow from '../images/snow.png'
import thunder from '../images/thunder.png'



class Weather extends React.Component {
    state = {
        weatherData: [],
        weatherMain: {},
    }

    componentDidMount() {
        /** 
         * When Component is "ready", call the function 
         * that will fetch the data and store it in state
         */
        this.fetchWeather();
    }

    fetchWeather = () => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Tokyo&m&appid=2e9e1e9388108b649d7e8be919c17e07&units=metric')
            .then(response => response.json())
            .then((weatherData) => {
                /** Key is this.state.playlist
                 *  value is array fetched from API
                 *  App.state.playlists = playlists
                 *  if key and value variable have the same name -> combine
                 *  We do not need to output to HTML here, React will do it for us
                 */
                this.setState({ weatherData: weatherData });
                this.setState({ weatherMain: weatherData.main });
                console.log(weatherData)
            })
    }

    render() {
        let cityName = "";
        if (this.state.weatherData.name) {
            cityName = this.state.weatherData.name;
        }

        let description = "";
        if (this.state.weatherData.weather) {
            description = this.state.weatherData.weather[0].description;
        }

        let temp = "";
        if (this.state.weatherMain.temp) {
            temp = this.state.weatherMain.temp;
        }

        let image = " "
        if (description === 'clear sky') {
            image = sunny
        }
        else if (description === 'few clouds') {
            image = littlecloudy
        }
        else if (description === 'broken clouds' || 'scattered clouds') {
            image = cloudy
        }
        else if (description === 'rain' || 'shower rain') {
            image = rainy
        }
        else if (description === 'snow') {
            image = snow
        }
        else if (description === 'thunderstorm') {
            image = thunder
        }
        return (
            <div className="wrapper" >
                <div className="weather">
                    <h1>weather</h1>
                    <h2> {cityName} </h2>
                    <h2> {description} </h2>
                    <img src={image} alt={" "} />
                    <h2> {temp} C </h2>
                </div>
                <div className="facts">
                    Weather is a common topic of conversation in every culture.
                    However, the Japanese take this a step further. The weather is a national conversational obsession.
                </div>
            </div>
        );

    }
}


export default Weather;