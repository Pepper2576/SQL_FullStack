import React from 'react';
import '../styles/employee-list/employee-list.css';

const EmployeeList = ({ data }) => {
  return (
    <div>
      <h1>All Employees</h1>
      <table>
        <tr>
          <th>Employee ID</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Has admin rights</th>
        </tr>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.admin_rights === 1 ? 'Yes' : 'No'}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default EmployeeList;
