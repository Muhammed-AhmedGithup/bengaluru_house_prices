function getBathValue() {
  const uiBathrooms = document.getElementsByName("uiBathrooms");

  for (const i in uiBathrooms) {
    if (uiBathrooms[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}

function getBHKValue() {
  const uiBHK = document.getElementsByName("uiBHK");

  for (const i in uiBHK) {
    if (uiBHK[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}

function onClickedEstimatePrice() {
  console.log("Estimate price button clicked");

  const sqft = document.getElementById("uiSqft");
  const bhk = getBHKValue();
  const bathrooms = getBathValue();
  const location = document.getElementById("uiLocations");
  const estPrice = document.getElementById("uiEstimatedPrice");

  const url = "http://127.0.0.1:5000/predict"; //Use this if you are NOT using nginx which is first 7 tutorials
  //var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards

  fetch(url, {
    body: JSON.stringify({
      total_sqft: parseFloat(sqft.value),
      bhk: bhk,
      bath: bathrooms,
      location: location.value,
    }),

    method: "POST",

    headers: {
      "Content-Type": "multipart/form-data",
    },

    // mode: "no-cors",
    // mode: "cors", // no-cors, *cors, same-origin, use-credentials
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.estimated_price);

      estPrice.innerHTML =
        "<h2>" + data.estimated_price.toString() + " Lakh</h2>";

      console.log("Status", data);
    });
}

function onPageLoad() {
  console.log("----------- document loaded -------------");
  const url = "http://127.0.0.1:5000/name"; // Use this if you are NOT using nginx which is first 7 tutorials
  //var url = "/api/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards

  fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  })
    .then((response) => {
      console.log("Response", response);
      console.log("end");

      return response.json();
    })
    .then((data) => {
      console.log("got response for get_location_names request");
      console.log("Data", data);

      if (data) {
        const locations = data.locations;
        const uiLocations = document.getElementById("uiLocations"); // this variable is un-used

        for (const i in locations) {
          uiLocations[i] = new Option(locations[i], locations[i]);
        }
      }
    })
    .catch((error) => {
      console.log("Error", error);
    });
}

window.onload = onPageLoad;
