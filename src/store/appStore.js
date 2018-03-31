import {observable, action} from 'mobx';
import axios from "axios";


export class AppStore {
  @observable test = 1;


  config = {
    headers: {
      'Accept':'application/json',
      'Ocp-Apim-Subscription-Key':'db1281e5a3c744588d24b32202d6ba11',
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '96.37.92.170',
      port: 8080
    }
  };

  @action
  getSwedaviaData() {
  console.log(this.config);
  console.log("running get Swedavia data");
  axios.get("https://api.swedavia.se/flightinfo/v2/ARN/departures/2018-04-04",this.config)
  .then(function (response) {
  console.log('then');
  console.log(response);
})
.catch(function (error) {
console.log(error);
});

}


}
