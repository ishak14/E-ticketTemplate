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
    this.state = {
      value: 'coconut'
    };
    this.appStore = new AppStore();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
 componentWillMount(){
  this.appStore.getSwedaviaData();
}
handleChange(event) {
  console.log(event.target.value);
  this.setState({
    value: event.target.value
  });
}
handleSubmit(event){
  alert('Your favorite flavor is: ' + this.state.value);
  event.preventDefault();
}
  render() {

    return (
      <div className="container SimplePDF">
        <div className="background"></div>
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
            arrivalCity="Erbil"
            arrivalAirport="Erbil international airport"
            arrivalIATA="EBL"
            referenceNumber="#EFC200D"
            terminal="5"
            airplaneInfo="SK505"
            flightTime="3h 50m"
            />
          <form onSubmit={this.handleSubmit.bind(this)}>
                 <label>
                   Pick your favorite La Croix flavor:
                  <select value={this.state.value} onChange={this.handleChange.bind(this)}>
                     <option value="grapefruit">Grapefruit</option>
                     <option value="lime">Lime</option>
                     <option value="coconut">Coconut</option>
                     <option value="mango">Mango</option>
                   </select>
                 </label>
                 <input type="submit" value="Submit" />
               </form>
        </div>
        <div className="footer">
          <h1>ANDYRESOR</h1>
        </div>
      </div>
    );
  }
}

export default App;
