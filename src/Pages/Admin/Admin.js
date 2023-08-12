import React, { useState } from 'react';
import { data as initialData } from '../../API/data';
import './admin.css';


const Admin = () => {
  const [updatedData, setUpdatedData] = useState(initialData);
  const [newData, setNewData] = useState({
    id: "",
    category: "",
    type: "",
    features: {},
    description: {},
    collection: "",
    occasion: "",
    title: "",
    size: [],
    price: "",
    discount: "",
    color: [],
    images: [[]],
    comments: {},
  });

  const handleAdd = () => {
    const existingDataIndex = updatedData.findIndex((item) => item.id === newData.id);

    if (existingDataIndex !== -1) {
      const updatedDataCopy = [...updatedData];
      updatedDataCopy[existingDataIndex] = newData;
      setUpdatedData(updatedDataCopy);
    } else {
      setUpdatedData((prevData) => [...prevData, newData]);
    }

    setNewData({
      id: "",
      category: "",
      type: "",
      features: {},
      description: {},
      collection: "",
      occasion: "",
      title: "",
      size: [],
      price: "",
      discount: "",
      color: [],
      images: [[]],
      comments: {},
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevNewData) => ({ ...prevNewData, [name]: value }));
  };

  const handleNestedChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevNewData) => ({
      ...prevNewData,
      [name]: {
        ...prevNewData[name],
        [value]: '',
      },
    }));
  };

  const handleSelectChange = (event) => {
    const selectedId = event.target.value;
    const selectedData = updatedData.find((item) => item.id === selectedId);
    if (selectedData) {
      setNewData(selectedData);
    } else {
      setNewData({
        id: "",
        category: "",
        type: "",
        features: {},
        description: {},
        collection: "",
        occasion: "",
        title: "",
        size: [],
        price: "",
        discount: "",
        color: [],
        images: [[]],
        comments: {},
      });
    }
  };

  const handleDelete = (id) => {
    const updatedDataCopy = updatedData.filter((item) => item.id !== id);
    setUpdatedData(updatedDataCopy);

    if (newData.id === id) {
      setNewData({
        id: "",
        category: "",
        type: "",
        features: {},
        description: {},
        collection: "",
        occasion: "",
        title: "",
        size: [],
        price: "",
        discount: "",
        color: [],
        images: [[]],
        comments: {},
      });
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <h3>Select Data</h3>
      <select onChange={handleSelectChange}>
        <option value="">Select Data</option>
        {updatedData.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title} - {item.id}
          </option>
        ))}
      </select>
      <h3>Add Data</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        {Object.keys(newData).map((key) =>
          typeof newData[key] === 'object' ? (
            <div key={key}>
              <h4>{key}</h4>
              {Object.keys(newData[key]).map((nestedKey) => (
                <input
                  key={nestedKey}
                  type="text"
                  name={key}
                  placeholder={nestedKey}
                  value={newData[key][nestedKey]}
                  onChange={handleNestedChange}
                />
              ))}
            </div>
          ) : (
            <input
              key={key}
              type="text"
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={newData[key]}
              onChange={handleChange}
            />
          )
        )}
        <button className='adminBtn' onClick={handleAdd}>Add Data</button>
      </form>

      {newData.id && (
        <div>
          <h3>Details of Data ID: {newData.id}</h3>
          <pre>{JSON.stringify(newData, null, 2)}</pre>
          <button className='adminBtn' onClick={() => handleDelete(newData.id)}>Delete Data</button>
        </div>
      )}

      <h3>All Data</h3>
      {updatedData.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <pre>{JSON.stringify(item, null, 2)}</pre>
          <button className='adminBtn' onClick={() => handleDelete(item.id)}>Delete Data</button>
        </div>
      ))}
    </div>
  );
};

export default Admin;
