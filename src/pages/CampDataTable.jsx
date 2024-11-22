import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

// Sample data for the demo
const dataSource = [
  {
    key: '1',
    name: 'Blood Donation Camp',
    date: '2024-11-21',
    location: 'City Park',
  },
  {
    key: '2',
    name: 'Polio Camp',
    date: '2024-11-22',
    location: 'Community Center',
  },
  {
    key: '3',
    name: 'Organ Donation Camp',
    date: '2024-11-23',
    location: 'Main Hall',
  },
];

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
    
  return (
    <div className="p-4 for_responsive" style={{ marginLeft: '12rem' }}>
    <div className="flex justify-between items-center mb-3">
      <h2 className='text-white text-center p-3 font-bold' style={{ fontSize: '36px', flex: 1 }}>Camp Table</h2>
      <Link to="/ManageCamp" className="bg-white p-2 rounded text-emerald-950 font-bold m-4 hover:bg-emerald-950 hover:text-white border-emerald-950 border-2 border-transparent hover:border-white">
        Add Camp
      </Link>
    </div>
    
    <Table 
      dataSource={dataSource} 
      columns={columns} 
      pagination={true} 
      rowKey="key"
    />
  </div>
  
  );
};

export default CampDataTable;
