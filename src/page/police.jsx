import { useState } from "react";
import { policeStations } from "../data/police";
import AnimationWrapper from "../common/page_animation";

const Police = () => {
  const [selectedStation, setSelectedStation] = useState(null);

  const handleSelectChange = (event) => {
    const stationName = event.target.value;
    const stationDetails = policeStations.find(
      (station) => station.name === stationName,
    );
    setSelectedStation(stationDetails);
  };

  return (
    <AnimationWrapper>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="mb-6 text-center text-4xl font-bold text-blue-900">
          Police Stations in Kaduna State
        </h1>

        <div className="mb-6 flex justify-center">
          <select
            className="w-1/2 rounded-lg border border-gray-400 p-2"
            onChange={handleSelectChange}
            defaultValue=""
          >
            <option value="" disabled>
              Select a Police Station
            </option>
            {policeStations.map((station, index) => (
              <option key={index} value={station.name}>
                {station.name}
              </option>
            ))}
          </select>
        </div>

        {selectedStation && (
          <div className="mx-auto max-w-xl rounded-lg bg-white p-6 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800">
              {selectedStation.name}
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Address: {selectedStation.address}
            </p>
          </div>
        )}
      </div>
    </AnimationWrapper>
  );
};

export default Police;
