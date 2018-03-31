import React from 'react';
import "./Ticket.css";
import ReactSVG from 'react-svg';
const Ticket = ({
  departureDay,
  departureCity,
  departureIATA,
  departureTime,
  departureAirport,
  arrivalDay,
  arrivalCity,
  arrivalIATA,
  arrivalTime,
  arrivalAirport,
  flightTime,
  airplaneInfo,
  terminal,
  referenceNumber}) => (
    <div>
    <div className="ticket-container">
      <div className="ticket-header">
        <div className="image">
        <ReactSVG
        path={"../images/airplane-return.svg"}
        evalScript="always"
        className="img"
        />
        </div>
        <div className="info">
          <div className="departureDay">
            <p>{departureDay}</p>
          </div>
          <div className="departure">
          <span className="departureAirport">
          {departureCity}({departureIATA}) till </span>
          <span className="arrivalAirport">
          {arrivalCity}({arrivalIATA})</span>
          </div>
        </div>
        <div className="refernce"></div>
      </div>
      <div className="ticket-body">
      <div className="companyLogo">
        <ReactSVG
        path={"./logos/Emirates_Airlines.svg"}
        evalScript="always"
        className="img"
        /></div>
      <div className="departure">
        <p className="city">{departureCity}</p>
        <p className="IATA">{departureIATA}</p>
        <p className="time">{departureTime}</p>
        <p className="airport">{departureAirport}</p>

      </div>
      <div className="flightTime">
        <p className="time">{flightTime}</p>
        <p>-></p>
      </div>
      <div className="arrival">
      <p className="city">{arrivalCity}</p>
      <p className="IATA">{arrivalIATA}</p>
      <p className="time">{arrivalTime}</p>
      <p className="airport">{arrivalAirport}</p>
      </div>
      <div className="airplaneInfo">
      <p className="airplaneInfoHeader">FLYG</p>
      <p className="airplaneInfo">{airplaneInfo}</p>
      </div>
      <div className="terminal">
      <p className="terminalHeader">TERMINAL</p>
      <p>{terminal}</p>
      </div>
      </div>
    </div>
  </div>
);

export default Ticket;
