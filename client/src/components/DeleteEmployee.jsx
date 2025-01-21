import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import { deleteEmployee } from '../api/api.js';

const DeleteEmployee = ({ data }) => {
  const [employeeId, setEmployeeId] = useState(null);

  async function handleDelete() {
    const result = await deleteEmployee(employeeId);

    if (!result) {
      alert('Error in update. Try again or contact IT');
    } else {
      alert('Update complete. Refresh page to see changes');
    }
  }

  return (
    <div>
      <h1>Delete an employee</h1>
      <div className='tw-pt-2'>
        <label htmlFor='delete-employee'>
          Enter the ID of the employee to delete
        </label>
        <input
          type='number'
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          className='tw-border-solid tw-border-2 tw-border-slate-700 tw-ml-2'
        />
      </div>
      <div className='tw-pt-2'>
        <button type='button' class='btn btn-danger' onClick={handleDelete}>
          Delete
        </button>
      </div>
      <div>
        <EmployeeList key={data.id} data={data} />
      </div>
    </div>
  );
};

export default DeleteEmployee;
