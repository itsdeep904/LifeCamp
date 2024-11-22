import React from "react";
import { Link } from "react-router-dom";
const ManageCamp = () => {
  return (
    <>
      <div className="p-4 for_responsive" style={{ marginLeft: "12rem" }}>
        <form className="mx-auto" style={{ maxWidth: '70rem' }}>
          <h4
            className="text-white text-center font-bold m-4"
            style={{ fontSize: "36px" }}
          >
            Add Camp
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mb-5">
              <label
                for="text"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Camp Name
              </label>
              <input
                type="text"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="mb-5">
              <label
                for="city"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="state"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="address"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="mb-5">
              <label
                for="phone"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="pincode"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="CampImage"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Camp Image
              </label>
              <input
                type="file"
                id="CampImage"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                accept="image/*"
                capture="camera"
                required
              />
            </div>
          </div>
          <div className="mb-5">
            <label
              for="description"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              className="ms-2 text-sm font-medium text-white dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <div className="flex justify-between items-center w-full space-x-4 sm:space-x-0">
            <button
              type="submit"
              className="text-white bg-emerald-950 hover:bg-white hover:text-emerald-950 focus:ring-4 focus:outline-none focus:bg-white focus:text-emerald-950 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:text-white dark:bg-emerald-950 dark:hover:bg-white dark:hover:text-emerald-950 dark:focus:bg-white dark:focus:text-emerald-950"
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
