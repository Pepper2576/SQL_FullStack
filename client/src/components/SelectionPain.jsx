import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const SelectionPain = ({ onSelectionChange }) => {
  const handleChange = (e) => {
    onSelectionChange(e.target.id);
  };

  return (
    <div>
      <div className='tw-p-4'>
        <h3>Select required function</h3>
      </div>
      <div className='tw-p-2'>
        <div class='form-check'>
          <input
            class='form-check-input'
            type='radio'
            name='flexRadioDefault'
            id='employeeList'
            onChange={handleChange}
            defaultChecked
          />
          <label class='form-check-label' for='employeeList'>
            Employee list
          </label>
        </div>
        <div class='form-check'>
          <input
            class='form-check-input'
            type='radio'
            name='flexRadioDefault'
            id='searchById'
            onChange={handleChange}
          />
          <label class='form-check-label' for='searchById'>
            Search for employee by ID
          </label>
        </div>
        <div class='form-check'>
          <input
            class='form-check-input'
            type='radio'
            name='flexRadioDefault'
            id='createNewEmployee'
            onChange={handleChange}
          />
          <label class='form-check-label' for='createNewEmployee'>
            Create a new employee
          </label>
        </div>
        <div class='form-check'>
          <input
            class='form-check-input'
            type='radio'
            name='flexRadioDefault'
            id='editEmployee'
            onChange={handleChange}
          />
          <label class='form-check-label' for='editEmployee'>
            Edit or Update and employee
          </label>
        </div>
        <div class='form-check'>
          <input
            class='form-check-input'
            type='radio'
            name='flexRadioDefault'
            id='deleteEmployee'
            onChange={handleChange}
          />
          <label class='form-check-label' for='deleteEmployee'>
            <span className='tw-text-red-600'>DELETE</span> Employee
          </label>
        </div>
      </div>
    </div>
  );
};

export default SelectionPain;
