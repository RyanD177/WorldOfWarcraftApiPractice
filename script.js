const API_BASE_URL = "https://us.api.blizzard.com/data/wow/pet/index";
const NAMESPACE = "static-us";
const LOCALE = "en_US";
const ACCESS_TOKEN = "US9PlWTTKX9reWxrxSZT6t29lsEXMNImGf";


async function getItemData(itemId) {
  const url = `https://us.api.blizzard.com/data/wow/pet/index?namespace=${NAMESPACE}&locale=${LOCALE}&access_token=${ACCESS_TOKEN}`;
  const response = await fetch(url);

   const data = await response.json();

   const pets = data.pets;
   console.log(pets);

   pets.forEach((pet) => {
      if(pet.name.includes('Rat')){
         console.log(pet.name);
      }
   })

}

getItemData()