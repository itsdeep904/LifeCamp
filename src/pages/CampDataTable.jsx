import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Columns for the Table
const columns = [
  {
    title: 'Camp Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
];

const CampDataTable = () => {
  // Initialize state to store the camp data
  const [dataSource, setDataSource] = useState([]);

  // Fetch data from the API on component mount
  useEffect(() => {
    axios.get("http://localhost:7184/api/Camp/GetProducts")
      .then(response => {
        // Update state with fetched data
        setDataSource(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="p-4 for_responsive" style={{ marginLeft: '12rem' }}>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-white text-center p-3 font-bold" style={{ fontSize: '36px', flex: 1 }}>Camp Table</h2>
        <Link to="/ManageCamp" className="bg-white p-2 rounded text-emerald-950 font-bold m-4 hover:bg-emerald-950 hover:text-white border-emerald-950 border-2 border-transparent hover:border-white">
          Add Camp
        </Link>
      </div>

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={true}
        rowKey="id" // Assuming 'id' is the unique identifier for each camp
      />
    </div>
  );
};

export default CampDataTable;
