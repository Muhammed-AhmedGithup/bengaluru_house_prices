// import { postLocationName } from "../api";

import { postLocationName } from "../api";
import { BusinessType } from "./types";

export function getBathValue() {
  const uiBathrooms = document.getElementsByName("uiBathrooms");

  for (const i in uiBathrooms) {
    if (uiBathrooms[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}

export function getBHKValue() {
  const uiBHK = document.getElementsByName("uiBHK");

  for (const i in uiBHK) {
    if (uiBHK[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}

export const onSubmitForm =
  (formData: BusinessType, setFormData) =>
  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const sqft = formData.Squareft;
    const bhk = formData.uiBHK;
    const bathrooms = formData.uiBathrooms;
    const location = formData.location;
    //   const estPrice = document.getElementById("uiEstimatedPrice");

    return postLocationName("http://127.0.0.1:5000/predict", {
      bath: bathrooms,
      bhk,
      location,
      total_sqft: parseFloat(sqft.toString()),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data", data);

        console.log(data.estimated_price);

        setFormData((prev) => ({
          ...prev,
          estimated_price: data["the-prediction"],
        }));
        return data["the-prediction"];
      });
  };
