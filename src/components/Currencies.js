import React from 'react';
import Clock from './Clock';

class Currencies extends React.Component {
    state = {

        valueSEK: [],
        valueJPY: [],
        date: [],

    }

    componentDidMount() {
        /** 
         * When Component is "ready", call the function 
         * that will fetch the data and store it in state
         */
        this.fetchCurrencies();

    }

    update = () => {
        this.fetchCurrencies();
    }

    fetchCurrencies = () => {
        fetch("http://data.fixer.io/api/latest?access_key=6f8edd43a297e58f5aacd76dc4ac69c6")
            .then(response => response.json())
            .then((currencies) => {
                /** Key is this.state.playlist
                 *  value is array fetched from API
                 *  App.state.playlists = playlists
                 *  if key and value variable have the same name -> combine
                 *  We do not need to output to HTML here, React will do it for us
                 */
                this.setState({ valueSEK: currencies.rates.SEK.toFixed(1) });
                this.setState({ valueJPY: currencies.rates.JPY.toFixed(1) });
                this.setState({ date: currencies.date })
            })
    }

    render() {

        return (

            <div className="wrapper">
                <div className="currency">
                    <h1>currency</h1>
                    <h2>{this.state.valueJPY} Yen = {this.state.valueSEK} Sek</h2><br />
                    <h3> Last updated {this.state.date}</h3><br />
                    <button id="refresh">{this.state.update} Update </button>
                </div>
                <div className="facts">
                    <p>Placing a yen in a microwave while you’re in Japan can result in a 200,000 yen fine,
                    according to the Monetary Damage Control Act. Don’t say I didn’t warn you.</p>
                </div>
            </div>


        )
    }
}

export default Currencies;