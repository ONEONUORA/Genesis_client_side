/* eslint-disable react/prop-types */


import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../App";



// User Dashboard Component
const UserDashboard = () => {
  const {
    userAuth: { fullname, email, role }, // Assuming role is included in userAuth
  } = useContext(UserContext);

  const [formData, setFormData] = useState({
    victimName: "",
    victimEmail: "",
    victimContact: "",
    victimLocation: "",
    witnessOneName: "",
    witnessTwoName: "",
  });
  const [pictureEvidence, setPictureEvidence] = useState(null);
  const [audioEvidence, setAudioEvidence] = useState(null);
  const [userReports, setUserReports] = useState([]); // To store user's reports
  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Fetch user reports on load
//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const response = await axios.get(
//           import.meta.env.VITE_SERVER_DOMAIN + "/api/incidents/user-reports",
//           { params: { email } }, // Fetch reports based on user email
//         );
//         setUserReports(response.data);
//       } catch (error) {
//         console.error("Error fetching user reports:", error);
//       }
//     };
//     fetchReports();
//   }, [email]);

useEffect(() => {
    const fetchReports = async () => {
      if (!email) {
        console.warn("Email is undefined");
        return;
      }
  
      try {
        const response = await axios.get(
          import.meta.env.VITE_SERVER_DOMAIN + "/api/incidents/user-reports",
          { params: { email } } // Pass email as a parameter if it's available
        );
        setUserReports(response.data);
      } catch (error) {
        console.error("Error fetching user reports:", error);
      }
    };
  
    fetchReports();
  }, [email]);
  

   // Open the modal with the selected report details
   const handleReportClick = (report) => {
    setSelectedReport(report);
    setIsModalVisible(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedReport(null);
  };

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input changes for evidence
  const handleFileChange = (e) => {
    if (e.target.name === "pictureEvidence")
      setPictureEvidence(e.target.files[0]);
    if (e.target.name === "audioEvidence") setAudioEvidence(e.target.files[0]);
  };

  // Handle form submission for new report
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (
      !formData.victimName ||
      !formData.victimEmail ||
      !formData.victimContact ||
      !formData.victimLocation
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const data = new FormData();
    data.append("reporterName", fullname);
    data.append("reporterEmail", email);
    for (const [key, value] of Object.entries(formData))
      data.append(key, value);
    if (pictureEvidence) data.append("pictureEvidence", pictureEvidence);
    if (audioEvidence) data.append("audioEvidence", audioEvidence);

    try {
      await axios.post(
        import.meta.env.VITE_SERVER_DOMAIN + "/api/incidents/report",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      toast.success("Incident reported successfully");
      setFormData({
        victimName: "",
        victimEmail: "",
        victimContact: "",
        victimLocation: "",
        witnessOneName: "",
        witnessTwoName: "",
      });
      setPictureEvidence(null);
      setAudioEvidence(null);
    } catch (error) {
      console.error("Error reporting incident:", error);
      toast.error("Failed to report incident");
    }
  };

  // Handle status update (only if user has an admin role)
  const handleStatusChange = async (reportId, newStatus) => {
    try {
      await axios.patch(
        import.meta.env.VITE_SERVER_DOMAIN +
          `/api/incidents/update-status/${reportId}`,
        { status: newStatus },
      );
      toast.success("Status updated successfully!");

      // Update the status locally
      setUserReports((prevReports) =>
        prevReports.map((report) =>
          report._id === reportId ? { ...report, status: newStatus } : report,
        ),
      );
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };
// Modal Component
const Modal = ({ isVisible, onClose, report }) => {
    if (!isVisible) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-11/12 max-w-lg bg-white p-6 rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Report Details</h3>
          <p><strong>Report ID:</strong> {report._id}</p>
          <p><strong>Status:</strong> {report.status}</p>
          <p><strong>Victim Name:</strong> {report.victimName}</p>
          <p><strong>Victim Email:</strong> {report.victimEmail}</p>
          <p><strong>Victim Contact:</strong> {report.victimContact}</p>
          <p><strong>Location:</strong> {report.victimLocation}</p>
          {/* Additional fields as needed */}
          
          <button onClick={onClose} className="mt-4 w-full rounded bg-red-500 text-white p-2">
            Close
          </button>
        </div>
      </div>
    );
  };
  return (
    <section className="bg-gray-200">
      <p className="float-right pb-[2rem] pr-4 font-semibold capitalize text-black">
        {fullname}
      </p>
      <div className="user-dashboard p-[3rem]">
        <ToastContainer position="top-right" autoClose={5000} />
        {/* New Incident Report Form */}
        <form
          onSubmit={handleSubmit}
          className="center w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
        >
          <h1 className="mb-6 text-center text-2xl font-bold">
            Your Voice Matters
          </h1>
          <input
            type="text"
            name="victimName"
            placeholder="Victim's Name"
            value={formData.victimName}
            onChange={handleChange}
            className="mb-4 w-full rounded border border-gray-300 p-2"
            required
          />
          <input
            type="email"
            name="victimEmail"
            placeholder="Victim's Email"
            value={formData.victimEmail}
            onChange={handleChange}
            className="mb-4 w-full rounded border border-gray-300 p-2"
            required
          />
          <input
            type="text"
            name="victimContact"
            placeholder="Victim's Contact"
            value={formData.victimContact}
            onChange={handleChange}
            className="mb-4 w-full rounded border border-gray-300 p-2"
            required
          />
          <input
            type="text"
            name="victimLocation"
            placeholder="Victim's Location"
            value={formData.victimLocation}
            onChange={handleChange}
            className="mb-4 w-full rounded border border-gray-300 p-2"
            required
          />
          <p>Victim’s Picture Evidence</p>
          <input
            type="file"
            name="pictureEvidence"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-4 w-full rounded border border-gray-300 p-2"
          />
          <p>Victim’s Audio Evidence</p>
          <input
            type="file"
            name="audioEvidence"
            accept="audio/*"
            onChange={handleFileChange}
            className="mb-4 w-full rounded border border-gray-300 p-2"
          />
          <input
            type="text"
            name="witnessOneName"
            placeholder="First Witness Name"
            value={formData.witnessOneName}
            onChange={handleChange}
            className="mb-4 w-full rounded border border-gray-300 p-2"
          />
          <input
            type="text"
            name="witnessTwoName"
            placeholder="Second Witness Name"
            value={formData.witnessTwoName}
            onChange={handleChange}
            className="mb-4 w-full rounded border border-gray-300 p-2"
          />
          <button
            type="submit"
            className="w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
          >
            Report
          </button>
        </form>
      </div>

      {/* User Report Section */}
      <div className="user-reports mt-8 bg-white p-6 shadow-lg">
        <h2 className="text-center text-xl font-semibold">
          YOUR REPORT ON GENESIS
        </h2>

        {userReports.length > 0 ? (
          <ul>
            {userReports.map((report) => (
              <li key={report._id} className="border-b p-2">
                <p>
                  <strong>Report ID:</strong>{" "}
                  <span
                    className="cursor-pointer text-blue-500 underline"
                    onClick={() => handleReportClick(report)}
                  >
                    {report._id}
                  </span>
                </p>
                <p>
                  <strong>Status:</strong> {report.status}
                </p>

                {/* Admin Only: Status Update Dropdown */}
                {role === "admin" && (
                  <select
                    value={report.status}
                    onChange={(e) =>
                      handleStatusChange(report._id, e.target.value)
                    }
                    className="mt-2 w-full rounded border p-2"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-center text-2xl font-bold text-gray-500">
            No report yet
          </p>
        )}
      </div>
      {/* Report Details Modal */}
      <Modal
        isVisible={isModalVisible}
        onClose={closeModal}
        report={selectedReport}
      />
    </section>
  );
};



export default UserDashboard;


