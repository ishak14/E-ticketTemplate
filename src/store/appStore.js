import React from "react";
import {observable, action, runInAction} from 'mobx';
import axios from "axios";


export class AppStore {
  @observable test = 1;
  @observable flights = [];
  @observable flightID = [];



  @action
  getSwedaviaData() {
  axios.get("http://localhost:3001/swedavia")
  .then((response) => {
    runInAction(() => {
          this.setFlights(response);
      })
  })
  .catch((error) => {
  console.log(error);
  });
}

 setFlights = (response) =>{
   let id = 0;
   response.data.flights.forEach((flight) => {
     console.log(flight);
      this.flights.push(
        <option
         key={id}
         value={id}
         departureDate={flight.flightLegIdentifier.flightDepartureDateUtc.substring(1,14)}
         departureTime={flight.departureTime.estimatedUtc.substring(11,16)}
         arrivalIata={flight.flightLegIdentifier.arrivalAirportIata}
         departureIata={flight.flightLegIdentifier.departureAirportIata}
         flightID={flight.flightId}
         terminal={flight.locationAndStatus.terminal}
         >
         {flight.arrivalAirportEnglish}
         </option>);
         id = id+1;
   })
   return this.flights;
}}
