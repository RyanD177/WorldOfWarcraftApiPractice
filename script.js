const API_URL =
  "https://us.api.blizzard.com/data/wow/mount/index?namespace=static-us&locale=en_US&access_token=US9PlWTTKX9reWxrxSZT6t29lsEXMNImGf";
const htmlElement = document.getElementById("text");

async function getData() {
  const response = await fetch(API_URL);
  const data = await response.json();
  const mounts = data.mounts;

  const azureMounts = mounts.filter((mount) => mount.name.includes("Azure"));


  displayData(azureMounts);
}

function displayData(mounts) {
  mounts.forEach((mount) => {
    const div = document.createElement("div");

    div.classList.add("mounts-name");
    div.textContent = mount.name;
    htmlElement.appendChild(div);
  });
}

getData();
