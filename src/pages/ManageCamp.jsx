import React, { useState } from "react";
import { Link } from "react-router-dom";
import MapSelector from "./MapSelector"; // Import MapSelector
import axios from 'axios'; // Ensure axios is imported

const ManageCamp = () => {
  
  // const getCurrentLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         // Fetch location details using the latitude and longitude
  //         getLocationDetails(latitude, longitude);
  //       },
  //       (error) => {
  //         console.error("Error getting location:", error);
  //         alert("Unable to retrieve your location");
  //       }
  //     );
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // };

  // const getLocationDetails = async (latitude, longitude) => {
  //   const apiKey = "YOUR_API_KEY"; // Use your API key here
  //   const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     if (data.results.length > 0) {
  //       const address = data.results[0].components;
  //       setFormData((prev) => ({
  //         ...prev,
  //         country: address.country,
  //         city: address.city || address.town,
  //         state: address.state,
  //         pincode: address.postcode,
  //         address: data.results[0].formatted,
  //       }));
  //     } else {
  //       alert("No address found for your location.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching location details:", error);
  //   }
  // };

  const [formData, setFormData] = useState({
    country: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
    latitude: "", 
    longitude: "",
  
  });

  const handleLocationSelect = (address) => {
    setFormData((prev) => ({
      ...prev,
      country: address.country,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
      address: address.fullAddress,
      latitude: address.lat,
      longitude: address.lng,
    }));
    
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    campName: e.target.campName.value,
    phoneNumber: e.target.phoneNumber.value,
    email: e.target.email.value,
    status: e.target.status.value,
    address: formData.address,
    country: formData.country,
    city: formData.city,
    state: formData.state,
    pincode: formData.pincode,
    latitude: parseFloat(formData.latitude), // Ensure correct type
    longitude: parseFloat(formData.longitude), // Ensure correct type
    description: e.target.Description.value,
    campType: e.target.campType.value,
    organizedBy: e.target.OrganizedBy.value,
    startDate: e.target.startDate.value,
    endDate: e.target.endDate.value,
    startTime: e.target.startTime.value,
    endTime: e.target.endTime.value,
  };
  try {
    await axios.post('https://localhost:7184/api/Camp/AddUpdateCamp', data, {
      headers: { 'Content-Type': 'application/json' },
    });
     
    alert('Camp details successfully added/updated!');
    window.location.reload(); // Reload the page
  } catch (error) {
    console.error('Error submitting camp data:', error.response || error.message);
    alert('An error occurred while submitting camp data.');
  }
};

  
  
  return (
    <>
      <div className="p-4 for_responsive" style={{ marginLeft: "12rem" }}>
        <form className="mx-auto" style={{ maxWidth: "70rem" }} onSubmit={handleSubmit}>
          <h4
            className="text-white text-center font-bold m-4"
            style={{ fontSize: "36px" }}
          >
            Add Camp
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="mb-5">
              <label
                htmlFor="campName"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Camp Name
              </label>
              <input
                type="text"
                id="campName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Address
              </label>
              <input
                id="address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formData.address}
                readOnly
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="mb-5">
              <label
                htmlFor="country"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formData.country}
                readOnly
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="state"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formData.state}
                readOnly
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formData.city}
                readOnly
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="pincode"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formData.pincode}
                readOnly
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="mb-5">
              <label
                htmlFor="Description"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Description
              </label>
              <input
                id="Description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              ></input>
            </div>
            <div className="mb-5">
              <label
                htmlFor="campType"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Camp Type
              </label>
              <select
                id="campType"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Select Camp Type</option>
                <option value="blood">Blood</option>
                <option value="organ">Organ</option>
                <option value="polio">Polio</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Status
              </label>
              <select
                id="status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Select Status</option>
                <option value="0">Active</option>
                <option value="1">Inactive</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="OrganizedBy"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Organized By
              </label>
              <select
                id="OrganizedBy"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Select Organizer</option>
                <option value="1">Rahul</option>
                <option value="2">Amar</option>
                <option value="3">Kamal</option>
                <option value="4">Mandeep</option>
              </select>
            </div>
          </div>
          {/* Map Component */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-white dark:text-white">
              Select Camp Location
            </label>
            <MapSelector onLocationSelect={handleLocationSelect} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="mb-5">
              <label
                htmlFor="startDate"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="endDate"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="startTime"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Start Time
              </label>
              <input
                type="time"
                id="startTime"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="endTime"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                End Time
              </label>
              <input
                type="time"
                id="endTime"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
          </div>
          {/* for live location */}
          {/* <button
        type="button"
        onClick={getCurrentLocation}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Use My Location
      </button> */}

          {/* Submit Button */}
          <div className="flex justify-between items-center w-full space-x-4 sm:space-x-0">
            <button
              type="submit"
              className="text-white bg-emerald-950 hover:bg-white hover:text-emerald-950 focus:ring-4 focus:outline-none focus:bg-white focus:text-emerald-950 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:text-white dark:bg-emerald-950 dark:hover:bg-white dark:hover:text-emerald-950 dark:focus:bg-white dark:focus:text-emerald-950"
            >
              Submit
            </button>
            <Link to="/CampDataTable" className="bg-white rounded text-emerald-950 font-bold hover:bg-emerald-950 hover:text-white border-emerald-950 border-2 border-transparent hover:border-white w-full sm:w-auto px-3 py-1.5 text-center inline-block">
              Back
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default ManageCamp;
