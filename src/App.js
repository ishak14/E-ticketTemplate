import React, { Component} from 'react';
import './App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Ticket from './components/Ticket';
import {observer} from 'mobx-react';
import {AppStore} from './store/appStore';

@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.appStore = new AppStore();
  }

 componentWillMount(){
  this.appStore.getSwedaviaData();
}
  render() {

    return (
      <div className="container SimplePDF">
        <div className="background"></div>
        <div className="header">
          <p className="date">den 23 april 2018 - den 29 april 2018</p>
          <p className="nameFirstPerson">

          </p>
          <ul>
          {this.appStore.flightID}
          </ul>
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
            arrivalCity="Erbil"
            arrivalAirport="Erbil international airport"
            arrivalIATA="EBL"
            referenceNumber="#EFC200D"
            terminal="5"
            airplaneInfo="SK505"
            flightTime="3h 50m"
            />
        </div>
        <div className="footer">
          <h1>ANDYRESOR</h1>
        </div>
      </div>
    );
  }
}

export default App;
