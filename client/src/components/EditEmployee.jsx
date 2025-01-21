import React, { useState } from 'react';
import SearchById from './SearchById.jsx';
import { updateEmployee } from '../api/api.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const EditEmployee = ({ data }) => {
  const [employeeId, setEmployeeId] = useState(null);
  const [colToUpdate, setColToUpdate] = useState('first_name');
  const [newValue, setNewValue] = useState(null);

  async function handleUpdate() {
    const id = parseInt(employeeId);
    const col = colToUpdate;
    let value = newValue;

    if (col === 'admin_rights' && value.toLowerCase() === 'yes') {
      value = 1;
    } else if (col === 'admin_rights' && value.toLowerCase() === 'no') {
      value = 0;
    }

    const updateObject = {
      column: col,
      newValue: value,
      id: id,
    };

    console.log(updateObject);

    const result = await updateEmployee(updateObject);

    if (!result) {
      alert('Error in update. Try again or contact IT');
    } else {
      alert('Update complete. Refresh page to see changes');
    }
  }

  return (
    <div>
      <h1>Edit an Employee</h1>
      <div className='tw-pt-2'>
        <label htmlFor='employee-id'>
          Enter the employee ID you with to update
        </label>
        <input
          className='tw-border-solid tw-border-2 tw-border-slate-700 tw-ml-2'
          type='number'
          value={employeeId}
          onChange={(e) => {
            setEmployeeId(e.target.value);
          }}
        />
      </div>
      <div className='tw-p-1 tw-w-2/5'>
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
      <div className='tw-pt-2'>
        <label htmlFor='employee-id'>New Value</label>
        <input
          className='tw-border-solid tw-border-2 tw-border-slate-700 tw-ml-2'
          type='text'
          value={newValue}
          onChange={(e) => {
            setNewValue(e.target.value);
          }}
        />
        <div className='tw-pt-2'>
          <button type='button' class='btn btn-success' onClick={handleUpdate}>
            Submit
          </button>
        </div>
      </div>
      <div>
        <SearchById key={data.id} data={data} />
      </div>
    </div>
  );
};

export default EditEmployee;
