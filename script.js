const API_BASE_URL = "https://us.api.blizzard.com/data/wow/pet/index";

const NAMESPACE = "static-us"; /*
These 3 variables are required by the Blizzard API when making a request.

*/
const LOCALE = "en_US";
const ACCESS_TOKEN = "US9PlWTTKX9reWxrxSZT6t29lsEXMNImGf";


async function sleep(millis) {
   return new Promise(resolve => setTimeout(resolve, millis));
}



async function getPetsAndPetID() {
   const url = `https://us.api.blizzard.com/data/wow/pet/index?namespace=${NAMESPACE}&locale=${LOCALE}&access_token=${ACCESS_TOKEN}`;
   const response = await fetch(url);
   const data = await response.json();

   const pets = data.pets;

    pets.forEach(async function(pet)  {
      await sleep(100);
      getMedia(pet.id, pet.name); 
 
   });
}
async function getMedia(petId, petName) {
   const url = `https://us.api.blizzard.com/data/wow/media/pet/${petId}?namespace=${NAMESPACE}&locale=${LOCALE}&access_token=${ACCESS_TOKEN}`;
   try {
      const response = await fetch(url);
      const mediaData = await response.json();
     const dragon  = mediaData.assets.some(asset => asset.value.includes('blue'));

      if(dragon){
         displayTheMedia(petName , mediaData.assets[0].value);
         console.log(mediaData.assets[0].value);
      }
   } catch (error) {
      console.error('Error fetching media:', error);
   }
}


function displayTheMedia (petName, imageURL) {

 let petAge = Math.floor(Math.random() * 100) + 1;
const petContainer = document.getElementById('pets');
const petDiv = document.createElement('div');
petDiv.classList.add('pet-div')

const petText = document.createElement('h2');

const petAgeElement = document.createElement('p');
petAgeElement.classList.add('pet-age')

petAgeElement.textContent = ` Pets Age: ${petAge}`
petText.classList.add('pet-text');

const image = document.createElement('img')
image.classList.add('pet-image')
image.src = imageURL;


petText.textContent =`${petName}`
petDiv.appendChild(petText)
petDiv.appendChild(image)
petDiv.appendChild(petAgeElement)


petContainer.appendChild(petDiv);

}



getPetsAndPetID();
 




