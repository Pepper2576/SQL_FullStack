import React, { useState } from 'react';
import SearchById from './SearchById.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const EditEmployee = ({ data }) => {
  const [employeeId, setEmployeeId] = useState(null);
  const [colToUpdate, setColToUpdate] = useState(null);
  const [newValue, setNewValue] = useState(null);

  return (
    <div>
      <h1>Edit an Employee</h1>
      <div>
        <label htmlFor='employee-id'>
          Enter the employee ID you with to update
        </label>
        <input
          type='number'
          value={employeeId}
          onChange={(e) => {
            setEmployeeId(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor='newEmployeeLastName'>Select Colum to update</label>
        <select
          className='form-select'
          aria-label='Default select example'
          value={colToUpdate}
          onChange={(e) => setColToUpdate(e.target.value)}
        >
          <option value='first_name'>First name</option>
          <option value='last_name'>Last name</option>
          <option value='admin_rights'>Admin rights</option>
        </select>
      </div>
      <div>
        <label htmlFor='employee-id'>New Value</label>
        <input
          type='text'
          value={newValue}
          onChange={(e) => {
            setNewValue(e.target.value);
          }}
        />
      </div>
      <div>
        <SearchById key={data.id} data={data} />
      </div>
    </div>
  );
};

export default EditEmployee;
