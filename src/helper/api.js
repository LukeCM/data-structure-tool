import * as axios from "axios";

export default class Api {
  constructor() {
    this.client = null;
    this.api_url = process.env.REACT_APP_API_ENDPOINT;
  }
  

  init = () => {
    const invocation = new XMLHttpRequest();
    
    if (invocation) {
    invocation.open('GET', this.api_url + '/entries');
    invocation.onreadystatechange = function () {
        // In local files, status is 0 upon success in Mozilla Firefox
        if(invocation.readyState === XMLHttpRequest.DONE) {
          const status = invocation.status;
          if (status === 0 || (status >= 200 && status < 400)) {
            // The request has been completed successfully
            // console.log(invocation.responseText);
          } else {
            // Oh no! There has been an error with the request!
            console.log('Error occurred: ', invocation.responseText);
          }
        }
    };
    invocation.send();
    }

    let headers = {
      Accept: "application/json",
    };

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  getItemsList = () => {
    return this.init().get("/entries");
  };
}