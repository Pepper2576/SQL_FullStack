import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import { createEmployee } from '../api/api.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const CreateEmployee = ({ data }) => {
  const [newId, setNewId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [adminRights, setAdminRights] = useState('no');

  async function handleSubmit() {
    const intId = parseInt(newId);
    console.log('adminRights', adminRights);

    let admin = 0;

    if (adminRights === 'yes') {
      admin = 1;
    }

    const newEmployeeObject = {
      id: intId,
      first_name: firstName,
      last_name: lastName,
      admin_rights: admin,
    };

    const result = await createEmployee(newEmployeeObject);

    if (!result) {
      alert(
        'Unable to create employee. Please try again or contact IT support'
      );
    } else {
      alert('Employee created. Refresh page to see new employee');
    }

    setNewId('');
    setFirstName('');
    setLastName('');
  }

  return (
    <div>
      <div>
        <h1>Create new Employee</h1>
        <div>
          <div className='tw-p-1'>
            <label htmlFor='newEmployeeId'>New employee ID</label>
            <input
              type='text'
              value={newId}
              className='tw-border-solid tw-border-2 tw-border-slate-700 tw-ml-2'
              onChange={(e) => setNewId(e.target.value)}
            />
          </div>
          <div className='tw-p-1'>
            <label htmlFor='newEmployeeFirstName'>
              New employee first Name
            </label>
            <input
              type='text'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='tw-border-solid tw-border-2 tw-border-slate-700 tw-ml-2'
            />
          </div>
          <div className='tw-p-1'>
            <label htmlFor='newEmployeeLastName'>New employee last name</label>
            <input
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='tw-border-solid tw-border-2 tw-border-slate-700 tw-ml-2'
            />
          </div>
          <div className='tw-p-1 tw-w-2/5'>
            <label htmlFor='newEmployeeLastName'>
              Dose new employee require admin rights?
            </label>
            <select
              className='form-select'
              aria-label='Default select example'
              value={adminRights}
              onChange={(e) => setAdminRights(e.target.value)}
            >
              <option value='no'>No</option>
              <option value='yes'>Yes</option>
            </select>
            <div className='tw-pt-1'>
              <button
                type='button'
                className='btn btn-success'
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <EmployeeList key={data.id} data={data} />
      </div>
    </div>
  );
};

export default CreateEmployee;
