import { useState } from "react";
import rehabilitationCenters from "../data/rehabilitationCenters";
import AnimationWrapper from "../common/page_animation";

const Rehab = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);

  const handleSelectChange = (event) => {
    const selectedId = parseInt(event.target.value);
    const center = rehabilitationCenters.find((c) => c.id === selectedId);
    setSelectedCenter(center);
  };

  return (
    <AnimationWrapper>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="mb-6 text-center text-4xl font-bold text-blue-900">
          Rehabilitation Centers in Kaduna State
        </h1>
        <div className="mb-4 flex justify-center">
          <select onChange={handleSelectChange} className="rounded border p-2">
            <option value="">Select a Rehabilitation Center</option>
            {rehabilitationCenters.map((center) => (
              <option key={center.id} value={center.id}>
                {center.name}
              </option>
            ))}
          </select>
        </div>

        {selectedCenter && (
          <div className="mx-auto mt-6 max-w-md rounded bg-white p-4 shadow">
            <h2 className="text-2xl font-semibold">{selectedCenter.name}</h2>
            <p className="mt-2 text-gray-700">{selectedCenter.address}</p>
          </div>
        )}
      </div>
    </AnimationWrapper>
  );
};

export default Rehab;
