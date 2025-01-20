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
      <div className='tw-flex tw-flex-col tw-w-28 tw-p-5'>
        <label htmlFor='singleEmployee'>Employee ID</label>
        <input
          className=''
          type='number'
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <button type='button' className='btn btn-info' onClick={handleSearch}>
          Search
        </button>
        <button
          type='button'
          class='btn btn-secondary'
          onClick={showAllEmployees}
        >
          Show All
        </button>
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
