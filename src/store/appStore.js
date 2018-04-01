import React from "react";
import {observable, action, runInAction} from 'mobx';
import axios from "axios";


export class AppStore {
  @observable test = 1;
  @observable flights;
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

   response.data.flights.forEach((flight) => {
     console.log(flight);
      this.flightID.push(<li key={flight.flightId}>{flight.arrivalAirportEnglish}</li>);
   })
   console.log(this.flightID);
   return this.flightID;
}}
