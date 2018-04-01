import React, { Component} from 'react';
import './App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Ticket from './components/Ticket';
import {observer} from 'mobx-react';
import {AppStore} from './store/appStore';
import Select from 'react-select';

@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'coconut',
    };
    this.appStore = new AppStore();

  }
  handleChange = (event)=> {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  componentWillMount(){
    this.appStore.getSwedaviaData();
  }

  render() {

    return (
      <div className="container SimplePDF">

        <div className="header">
          <p className="date">den 23 april 2018 - den 29 april 2018</p>
          <p className="nameFirstPerson">
            Andy Ishak
          </p>

          <p className="reference">
            #EF2244F2
          </p>
        </div>
        <div className="body">
          <Ticket
            departureDay="den 23 april 2018"
            departureTime="8:30"
            departureCity="Stockholm"
            departureAirport="Arlanda"
            departureIATA="ARN"
            arrivalDay="den 23 april 2018"
            arrivalTime="12:30"
            arrivalCity={this.state.value}
            arrivalAirport="Erbil international airport"
            arrivalIATA="EBL"
            referenceNumber="#EFC200D"
            terminal="5"
            airplaneInfo="SK505"
            flightTime="3h 50m"
            />
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick your favorite La Croix flavor:
              <select value={this.state.value} onChange={this.handleChange} style={{zIndex:"8000", marginLeft:'100px'}}>
                {this.appStore.flights}
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

      </div>

    );
  }
}

export default App;
