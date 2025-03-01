import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MapSelector from "../common/MapSelector";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../common/axiosConfig";

const Setting = (addUpdate) => {
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
    phoneNumber: "",
    email: "",
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
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      address: formData.address,
      country: formData.country,
      city: formData.city,
      state: formData.state,
      ZipCode: formData.pincode,
      latitude: parseFloat(formData.latitude),
      longitude: parseFloat(formData.longitude),
    };
    try {
      // pending
      const res = await axiosInstance.post(
        "https://localhost:44387/api/User/AddUpdateUser",
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
        `https://localhost:44387/api/Camp/GetCampById/${id}`
      );
      const camp = response.data;

      setFormData({
        country: camp.country || "",
        city: camp.city || "",
        state: camp.state || "",
        pincode: camp.zipCode || "",
        address: camp.address || "",
        latitude: camp.latitude || "",
        longitude: camp.longitude || "",
        phoneNumber: camp.phoneNumber || "",
        email: camp.email || "",
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
            Add Details
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
          {/* Map Component */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-white dark:text-white">
              Select Camp Location
            </label>
            <MapSelector
              style={{ width: "50%" }}
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
          <div className="flex justify-between items-center w-full space-x-4 sm:space-x-0">
            <button
              type="submit"
              className="border-white border-2 text-white bg-emerald-950 hover:bg-white hover:text-emerald-950 focus:ring-4 focus:outline-none focus:bg-white  focus:text-emerald-950 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:text-white dark:bg-emerald-950 dark:hover:bg-white dark:hover:text-emerald-950 dark:focus:bg-white dark:focus:text-emerald-950"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Setting;
