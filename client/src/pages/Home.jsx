import React, { useEffect, useState } from 'react';
import { getAllData } from '../api/api.js';
import EmployeeList from '../components/EmployeeList.jsx';
import SelectionPain from '../components/SelectionPain.jsx';
import CreateEmployee from '../components/CreateEmployee.jsx';
import DeleteEmployee from '../components/DeleteEmployee.jsx';
import EditEmployee from '../components/EditEmployee.jsx';
import SearchById from '../components/SearchById.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
  const [allData, setAllData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectOption, setSelectOption] = useState('employeeList');

  useEffect(() => {
    async function fetchData() {
      const data = await getAllData();
      setAllData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const onSelectionChange = (selectionId) => {
    setSelectOption(selectionId);
  };

  const renderElement = () => {
    switch (selectOption) {
      case 'employeeList':
        return <EmployeeList key={allData.id} data={allData} />;
      case 'searchById':
        return <SearchById key={allData.id} data={allData} />;
      case 'createNewEmployee':
        return <CreateEmployee key={allData.id} data={allData} />;
      case 'editEmployee':
        return <EditEmployee key={allData.id} data={allData} />;
      case 'deleteEmployee':
        return <DeleteEmployee key={allData.id} data={allData} />;
      default:
        return <EmployeeList key={allData.id} data={allData} />;
    }
  };

  return (
    <div>
      {loading ? (
        <div className='tw-mt-28'>
          <div className='d-flex justify-content-center '>
            <div className='spinner-border text-primary' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div className='tw-grid tw-grid-cols-5 tw-grid-rows-7 border border-red-500'>
          <div className='tw-col-span-1 tw-row-start-1 tw-row-end-7 tw-bg-slate-600 border border-green-500 tw-p-1'>
            <SelectionPain onSelectionChange={onSelectionChange} />
          </div>
          <div className='tw-col-start-2 tw-col-end-6 tw-row-start-1 tw-row-end-7 border border-blue-500 tw-p-1'>
            {renderElement()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
