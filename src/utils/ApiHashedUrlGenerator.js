import CryptoJS from "crypto-js";

class ApiHashedUrlGenerator{
  
  constructor(){
    this.apiKey = process.env.REACT_APP_PUBLIC_KEY||"";
    this.privateKey = process.env.REACT_APP_PRIVATE_KEY || "";
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
    console.log(process.env.REACT_APP_MARVEL_API_PRIVATE_KEY);
   return `?ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.getHash()}` 
  }
}
export default new ApiHashedUrlGenerator(); 