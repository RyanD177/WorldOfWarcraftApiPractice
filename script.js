const API_BASE_URL = "https://us.api.blizzard.com/data/wow/pet/index";
const NAMESPACE = "static-us";
const LOCALE = "en_US";
const ACCESS_TOKEN = "US9PlWTTKX9reWxrxSZT6t29lsEXMNImGf";


async function getItemData() {
  const url = `https://us.api.blizzard.com/data/wow/pet/index?namespace=${NAMESPACE}&locale=${LOCALE}&access_token=${ACCESS_TOKEN}`;
  const response = await fetch(url);

   const data = await response.json();

   const pets = data.pets;
   const petID = data.pets.forEach((pet) => {
      let pet_id = pet.id;
      console.log(pet_id);
      console.log(pet.name);
   })

   console.log(pets);

   pets.forEach((pet) => {
      if(pet.name.includes('Rat')){
    
      }
   })

}

function getDataMedia () {
   const url = `https://us.api.blizzard.com/data/wow/media/pet/39?namespace=static-us&locale=en_US&access_token=US9PlWTTKX9reWxrxSZT6t29lsEXMNImGf`;

}

getItemData()