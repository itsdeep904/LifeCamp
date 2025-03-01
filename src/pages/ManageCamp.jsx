import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MapSelector from "../common/MapSelector";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../common/axiosConfig";

const ManageCamp = ({ addUpdate }) => {
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    
    if (id && addUpdate === "edit") {
      handleGetData(id);
    }
  }, [id, addUpdate]);
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
    latitude: "",
    longitude: "",
    campName: "",
    phoneNumber: "",
    email: "",
    description: "",
    status: "",
    campType: "",
    OrganizedId: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
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
      id: id,
      campImage: "1.png",
      userLoginId: formData.userLoginId || "0",
      campName: formData.campName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      status: formData.status,
      address: formData.address,
      country: formData.country,
      city: formData.city,
      state: formData.state,
      ZipCode: formData.pincode,
      latitude: parseFloat(formData.latitude),
      longitude: parseFloat(formData.longitude),
      description: formData.description,
      campType: formData.campType,
      OrganizerId: formData.OrganizedId,
      startDate: formData.startDate,
      endDate: formData.endDate,
      startTime: formData.startTime,
      endTime: formData.endTime,
    };
    try {
      // pending
      const res = await axiosInstance.post(
        "/Camp/AddUpdateCamp",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.status === 401) {
        localStorage.removeItem("authToken");
        toast.error("Unauthorized");
      } else {
        // success
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/CampDataTable");
        }, 1500);
      }
    } catch (error) {
      // faild
      toast.error("An error occurred while submitting camp data.");
    }
  };

  const formatDate = (date) =>
    date ? new Date(date).toISOString().split("T")[0] : "";

  const handleGetData = async (id) => {
    try {
      const response = await axiosInstance.get(
        `/Camp/GetCampById/${id}`
      );
      const camp = response.data;

      setFormData({
        userLoginId: camp.userLoginId || "0",
        country: camp.country || "",
        city: camp.city || "",
        state: camp.state || "",
        pincode: camp.zipCode || "",
        address: camp.address || "",
        latitude: camp.latitude || "",
        longitude: camp.longitude || "",
        campName: camp.campName || "",
        phoneNumber: camp.phoneNumber || "",
        email: camp.email || "",
        description: camp.description || "",
        status: camp.status || "",
        campType: camp.campType || "",
        OrganizedId: camp.organizerId || "",
        startDate: formatDate(camp.startDate),
        endDate: formatDate(camp.endDate),
        startTime: camp.startTime || "",
        endTime: camp.endTime || "",
      });
    } catch (error) {
      console.error("Error fetching camp data:", error);
      alert("Failed to load camp data.");
    }
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <input
        type="hidden"
        id="userLoginId"
        value={formData.userLoginId || 0}
        readOnly
      />

      <div
        className="p-4 for_responsive"
        style={{
          marginLeft: "12rem",
          backgroundColor: "var(--background-center-color)",
        }}
      >
        <form
          className="mx-auto"
          // style={{ maxWidth: "70rem" }}
          onSubmit={handleSubmit}
        >
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
                defaultValue={formData.campName}
                onChange={(e) =>
                  setFormData({ ...formData, campName: e.target.value })
                }
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
                defaultValue={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
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
                defaultValue={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                defaultValue={formData.address}
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
                defaultValue={formData.country}
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
                defaultValue={formData.state}
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
                defaultValue={formData.city}
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
                defaultValue={formData.pincode}
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
                defaultValue={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
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
                value={formData.campType}
                onChange={(e) =>
                  setFormData({ ...formData, campType: e.target.value })
                }
              >
                <option value="">Select Camp Type</option>
                <option value="1">Blood</option>
                <option value="2">Organ</option>
                <option value="3">Polio</option>
                <option value="4">Other</option>
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
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <option value="">Select Status</option>
                <option value="1">Active</option>
                <option value="2">Inactive</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="OrganizedId"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Organized By
              </label>
              <select
                id="OrganizedId"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formData.OrganizedId}
                onChange={(e) =>
                  setFormData({ ...formData, OrganizedId: e.target.value })
                }
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
            <MapSelector
              onLocationSelect={handleLocationSelect}
              initialLocation={
                formData.latitude && formData.longitude
                  ? {
                      lat: parseFloat(formData.latitude),
                      lng: parseFloat(formData.longitude),
                    }
                  : null
              }
            />
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
                defaultValue={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
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
                defaultValue={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
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
                defaultValue={formData.startTime}
                onChange={(e) =>
                  setFormData({ ...formData, startTime: e.target.value })
                }
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
                defaultValue={formData.endTime}
                onChange={(e) =>
                  setFormData({ ...formData, endTime: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex justify-between items-center w-full space-x-4 sm:space-x-0">
            <button
              type="submit"
              className="border-white border-2 text-white bg-emerald-950 hover:bg-white hover:text-emerald-950 focus:ring-4 focus:outline-none focus:bg-white  focus:text-emerald-950 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:text-white dark:bg-emerald-950 dark:hover:bg-white dark:hover:text-emerald-950 dark:focus:bg-white dark:focus:text-emerald-950"
            >
              Submit
            </button>
            <Link
              to="/CampDataTable"
              className="bg-white rounded text-emerald-950 font-bold hover:bg-emerald-950 hover:text-white border-emerald-950 border-2 border-transparent hover:border-white w-full sm:w-auto px-3 py-1.5 text-center inline-block"
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default ManageCamp;
