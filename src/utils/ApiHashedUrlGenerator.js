import { MARVEL_API_PRIVATE_KEY, MARVEL_API_PUBLIC_KEY } from "../constants/apiDetails";

import CryptoJS from "crypto-js";

class ApiHashedUrlGenerator{

  constructor(){
    this.apiKey=MARVEL_API_PUBLIC_KEY;
    this.privateKey=MARVEL_API_PRIVATE_KEY;
    this.timeStamp=this.getTimeStamp();
  }
  getTimeStamp()
  {
   return new Date().getTime(); 
  }
  getHash()
  { 
    let hash=CryptoJS.MD5(this.timeStamp+this.privateKey+this.apiKey);
    return hash.toString(); 
  }
  
  getApiRemainingUrl()
  {
   return `?ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.getHash()}` 
  }
}
export default new ApiHashedUrlGenerator(); 