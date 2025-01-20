import React, { useState } from 'react';
import { getDataById } from '../api/api.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import EmployeeList from './EmployeeList.jsx';

const SearchById = ({ data }) => {
  const [employeeData, setEmployeeData] = useState(null);
  const [employeeId, setEmployeeId] = useState('');

  async function handleSearch() {
    console.log(employeeId);

    const data = await getDataById(employeeId);
    setEmployeeData(data);
  }

  const showAllEmployees = () => {
    setEmployeeData(null);
  };

  return (
    <div>
      <h1>Search for employee by ID</h1>
      <div className='tw-flex tw-flex-col tw-w-36 tw-p-5'>
        <label htmlFor='singleEmployee' className='tw-pb-2'>
          Employee ID
        </label>
        <input
          className='tw-border-solid tw-border-2 tw-border-slate-700'
          type='number'
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <div className='tw-flex tw-align-middle'>
          <div className='tw-pt-2 tw-h-4 tw-w-24'>
            <button
              type='button'
              className='btn btn-info'
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div className='tw-p-2 tw-h-4 tw-w-24'>
            <button
              type='button'
              class='btn btn-secondary'
              onClick={showAllEmployees}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className='tw-p-3'>
        {employeeData === null ? (
          <EmployeeList key={data.id} data={data} />
        ) : (
          <EmployeeList key={employeeData.id} data={[employeeData]} />
        )}
      </div>
    </div>
  );
};

export default SearchById;
