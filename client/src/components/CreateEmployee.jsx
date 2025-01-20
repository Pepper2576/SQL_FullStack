import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const CreateEmployee = ({ data }) => {
  const [newId, setNewId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [adminRights, setAdminRights] = useState('');

  const handleSubmit = () => {
    const intId = parseInt(newId);
    console.log(typeof intId);
    setNewId('');
  };

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
              className='tw-border-solid tw-border-2 tw-border-slate-700 tw-ml-2'
            />
          </div>
          <div className='tw-p-1'>
            <label htmlFor='newEmployeeLastName'>New employee last name</label>
            <input
              type='text'
              className='tw-border-solid tw-border-2 tw-border-slate-700 tw-ml-2'
            />
          </div>
          <div className='tw-p-1'>
            <label htmlFor='newEmployeeLastName'>
              Dose new employee require admin rights?
            </label>
            <div class='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name='flexRadioDefault'
                id='flexRadioDefault1'
                Checked
              />
              <label className='form-check-label' for='flexRadioDefault1'>
                No
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name='flexRadioDefault'
                id='flexRadioDefault2'
              />
              <label className='form-check-label' for='flexRadioDefault2'>
                Yes
              </label>
            </div>
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
