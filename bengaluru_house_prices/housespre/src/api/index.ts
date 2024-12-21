export function getLocationNames() {
  const url = "http://127.0.0.1:5000/name"; // Use this if you are NOT using nginx which is first 7 tutorials
  //var url = "/api/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards

  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    // credentials: "same-origin", // include, *same-origin, omit
    method: "GET",
  });
}

type PostLocationNameType = {
  total_sqft: number;
  bhk: number;
  bath: number;
  location: string;
};

export function postLocationName(url: string, data: PostLocationNameType) {
  url = url || "http://127.0.0.1:5000/predict";

  // Note: In a real-world application, you might also want to handle errors here.
  return fetch(url, {
    method: "POST",

    body: JSON.stringify(data),

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}
