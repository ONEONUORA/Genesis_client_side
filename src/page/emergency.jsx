import { useState } from "react";
import { emergencyContacts } from "../data/emergency";
import Animationwrapper from "../common/page_animation";

const Emergency = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  // Handle dropdown selection
  const handleSelect = (e) => {
    const selected = emergencyContacts.find(
      (contact) => contact.name === e.target.value,
    );
    setSelectedContact(selected);
  };

  return (
    <Animationwrapper>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="mb-6 text-center text-3xl font-bold text-blue-900">
          Emergency Contacts
        </h1>

        {/* Dropdown */}
        <div className="mb-6 flex justify-center">
          <select
            onChange={handleSelect}
            className="w-64 rounded-lg border border-gray-300 bg-white p-3 shadow-lg"
            defaultValue="default"
          >
            <option value="default" disabled>
              Select an Emergency Contact
            </option>
            {emergencyContacts.map((contact, index) => (
              <option key={index} value={contact.name}>
                {contact.name}
              </option>
            ))}
          </select>
        </div>

        {/* Display selected contact details */}
        {selectedContact && (
          <div className="rounded-lg bg-white p-4 text-center shadow-lg">
            <h2 className="mb-2 text-2xl font-bold">{selectedContact.name}</h2>
            <p className="text-lg">Contact: {selectedContact.contact}</p>
          </div>
        )}
      </div>
    </Animationwrapper>
  );
};

export default Emergency;
