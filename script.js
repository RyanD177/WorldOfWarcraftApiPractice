
const API_URL = "https://us.api.blizzard.com/data/wow/mount/index?namespace=static-us&locale=en_US&access_token=US9PlWTTKX9reWxrxSZT6t29lsEXMNImGf"


async function getData () {
   const response = await fetch(API_URL);
   const responseJson = await response.json();
   console.log(responseJson);
   

}
getData();