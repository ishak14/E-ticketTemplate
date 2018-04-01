import {observable, action} from 'mobx';
import axios from "axios";


export class AppStore {
  @observable test = 1;


  @action
  getSwedaviaData() {

  axios.get("http://localhost:3001/swedavia")
  .then(function (response) {
  console.log('then');
  console.log(response);
})
.catch(function (error) {
console.log(error);
});

}


}
