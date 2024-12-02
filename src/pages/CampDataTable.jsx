import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";

const CampDataTable = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    axios
      .get("https://localhost:7184/api/Camp/GetAllCamps")
      .then((response) => {
        const formattedData = response.data.map((camp) => ({
          key: camp.id,
          campName: camp.campName,
          address: camp.address,
          phoneNumber: camp.phoneNumber,
        }));

        setDataSource(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const columns = [
    {
      title: "Camp Name",
      dataIndex: "campName",
      key: "campName",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record.key)}
            style={{ marginRight: 8 }}
          />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record.key)}
          />
        </div>
      ),
    },
  ];

  const handleEdit = (id) => {
    console.log("Edit clicked for ID:", id);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setIsModalVisible(true);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting camp with ID:", deleteId);
    axios
      .delete(`https://localhost:7184/api/Camp/DeleteCampById/${deleteId}`)
      .then((response) => {
        console.log("Camp deleted successfully:", response.data);

        setDataSource((prevDataSource) =>
          prevDataSource.filter((camp) => camp.key !== deleteId)
        );
        setIsModalVisible(false);
      })
      .catch((error) => {
        console.error("Error deleting camp:", error);
      });
  };

  const handleCancelDelete = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="p-4 for_responsive" style={{ marginLeft: "12rem" }}>
      <div className="flex justify-between items-center mb-3">
        <h2
          className="text-white text-center p-3 font-bold"
          style={{ fontSize: "36px", flex: 1 }}
        >
          Camp Table
        </h2>
        <Link
          to="/ManageCamp"
          className="bg-white p-2 rounded text-emerald-950 font-bold m-4 hover:bg-emerald-950 hover:text-white border-emerald-950 border-2 border-transparent hover:border-white"
        >
          Add Camp
        </Link>
      </div>

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination
        rowKey="key"
      />

      {}
      <Modal
        title="Confirm Deletion"
        open={isModalVisible}
        onOk={handleConfirmDelete}
        onCancel={handleCancelDelete}
        okText="Delete"
        cancelText="Close"
        confirmLoading={false}
        okButtonProps={{
          style: {
            backgroundColor: "rgb(2, 44, 34, 1)",
            borderColor: "rgb(2, 44, 34, 1)",
            color: "white",
          },
        }}
        cancelButtonProps={{
          style: {
            backgroundColor: "white",
            borderColor: "rgb(2, 44, 34, 1)",
            color: "rgb(2, 44, 34, 1)",
            fontWeight: "bold",
          },
        }}
        centered 
      >
        <p>Are you sure you want to delete this camp?</p>
      </Modal>
    </div>
  );
};

export default CampDataTable;
