import { useEffect, useRef, useState } from "react";
import LocationsOptions from "./components/locations-options";
import ButtonForm from "./components/button-form";

// CSS
import "./App.css";
import { onSubmitForm } from "./utils/services";
import { BusinessType } from "./utils/types";

function App() {
  // const formRef = useRef(null);
  const [formData, setFormData] = useState<BusinessType>({
    Squareft: 1000,
    uiBHK: 1,
    uiBathrooms: 1,
    location: "Select Location",
  });

  useEffect(() => {
    console.log("FormData", formData);
  }, [formData]);

  const handleFormChange = (event) => {
    console.log("handleFormChange", event);
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="global-wrapper max-height">
      <h1 className="h1">Bengaluru House Prices </h1>
      <div className="img-wrapper">
        {/* <img src="../public/wallpaper.jpg" alt="Bengaluru House Prices" /> */}
      </div>

      <form
        className="form"
        id="form"
        name="form"
        // ref={formRef}
        onSubmit={onSubmitForm(formData, setFormData)}
      >
        <h2 className="input-h-2">Area (Square Feet)</h2>
        <input
          type="number"
          className="area"
          id="uiSqft"
          name="Squareft"
          value={formData.Squareft}
          onChange={handleFormChange}
        />

        <fieldset>
          <legend>Bedrooms</legend>
          <div className="switch-field">
            <input
              type="radio"
              id="radio-bhk-1"
              name="uiBHK"
              value={1}
              onChange={handleFormChange}
            />
            <label htmlFor="radio-bhk-1">1</label>
            <input
              type="radio"
              id="radio-bhk-2"
              name="uiBHK"
              value={2}
              defaultChecked
              onChange={handleFormChange}
            />

            <label htmlFor="radio-bhk-2">2</label>
            <input
              type="radio"
              id="radio-bhk-3"
              name="uiBHK"
              value={3}
              onChange={handleFormChange}
            />
            <label htmlFor="radio-bhk-3">3</label>
            <input
              type="radio"
              id="radio-bhk-4"
              name="uiBHK"
              value={4}
              onChange={handleFormChange}
            />
            <label htmlFor="radio-bhk-4">4</label>
            <input
              type="radio"
              id="radio-bhk-5"
              name="uiBHK"
              value={5}
              onChange={handleFormChange}
            />
            <label htmlFor="radio-bhk-5">5</label>
          </div>
        </fieldset>

        <fieldset className="switch-field">
          <legend>Bathrooms</legend>

          <input
            type="radio"
            id="radio-bath-1"
            name="uiBathrooms"
            value={1}
            defaultChecked
            onChange={handleFormChange}
          />
          <label htmlFor="radio-bath-1">1</label>

          <input
            type="radio"
            id="radio-bath-2"
            name="uiBathrooms"
            value={2}
            onChange={handleFormChange}
          />
          <label htmlFor="radio-bath-2">2</label>

          <input
            type="radio"
            id="radio-bath-3"
            name="uiBathrooms"
            value={3}
            onChange={handleFormChange}
          />
          <label htmlFor="radio-bath-3">3</label>

          <input
            type="radio"
            id="radio-bath-4"
            name="uiBathrooms"
            value={4}
            onChange={handleFormChange}
          />
          <label htmlFor="radio-bath-4">4</label>

          <input
            type="radio"
            id="radio-bath-5"
            name="uiBathrooms"
            value={5}
            onChange={handleFormChange}
          />
          <label htmlFor="radio-bath-5">5</label>
        </fieldset>

        <div>
          <h2 className="input-h-2">Location</h2>
          <LocationsOptions onChange={handleFormChange} />
        </div>

        {/* onClick="onClickedEstimatePrice()" */}
        <div className="flex flex-right p-1">
          <ButtonForm />

          <div id="uiEstimatedPrice" className="result">
            <input
              type="number"
              disabled
              readOnly
              value={formData["estimated_price"] || 0}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default App;
