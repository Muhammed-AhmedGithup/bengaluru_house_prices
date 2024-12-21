import { ChangeEventHandler, useEffect, useState } from "react";
import { getLocationNames } from "../../api";

interface LocationsOptionsProps {
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

export default function LocationsOptions({
  onChange: handleFormChange,
}: LocationsOptionsProps) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    getLocationNames()
      .then((response) => response.json())
      .then((data) => {
        console.log("Data", data);
        setIsLoaded(false);
        setData(data.locations);
      });
  }, []);

  return (
    <div>
      {isLoaded && !data ? (
        "Fetching locations from api..."
      ) : (
        <select
          name="location"
          className="options-locations"
          onChange={handleFormChange}
        >
          <option value="" disabled defaultChecked>
            Choose which country...
          </option>
          {data &&
            data.map((location) => (
              <option key={Math.random()} value={location}>
                {location}
              </option>
            ))}
        </select>
      )}
    </div>
  );
}
