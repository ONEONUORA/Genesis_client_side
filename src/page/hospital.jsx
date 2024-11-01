import { useState } from "react";
import hospitals from "../data/hospitals";
import AnimationWrapper from "../common/page_animation";

const Hospital = () => {
  const [selectedHospital, setSelectedHospital] = useState(null);

  const handleSelectChange = (event) => {
    const hospitalName = event.target.value;
    const hospitalDetails = hospitals.find(
      (hospital) => hospital.name === hospitalName,
    );
    setSelectedHospital(hospitalDetails);
  };

  return (
    <AnimationWrapper>
      <div className="flex min-h-screen flex-col items-center bg-gray-100 p-8">
        <h1 className="mb-6 text-4xl font-bold text-blue-900">
          Hospitals in Kaduna State
        </h1>

        {/* Dropdown for selecting hospitals */}
        <div className="mb-6 w-full max-w-md">
          <select
            className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-300 focus:outline-none focus:ring"
            onChange={handleSelectChange}
            defaultValue="Select a hospital"
          >
            <option disabled>Select a hospital</option>
            {hospitals.map((hospital, index) => (
              <option key={index} value={hospital.name}>
                {hospital.name}
              </option>
            ))}
          </select>
        </div>

        {/* Display hospital details */}
        {selectedHospital ? (
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800">
              {selectedHospital.name}
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              {selectedHospital.address}
            </p>
          </div>
        ) : (
          <p className="text-gray-500">
            Please select a hospital to see its details.
          </p>
        )}
      </div>
    </AnimationWrapper>
  );
};

export default Hospital;
