import urlData from '../endpoints/endpoints.js';

async function getAllData() {
  try {
    const results = await fetch(urlData.getData);

    if (!results.ok) {
      throw new Error(`Data not fetched`);
    }

    const data = await results.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getDataById(id) {
  try {
    const result = await fetch(`${urlData.getData}${id}`);

    if (!result.ok) {
      throw new Error(`Data not fetched`);
    }

    const data = await result.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function deleteEmployee(id) {
  try {
    const response = await fetch(`${urlData.deleteData}${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to delete employee with id ${id}: ${response.statusText}`
      );
    }

    const data = await getAllData();
    return data;
  } catch (error) {
    console.error('Error deleting employee:', error);
  }
}

async function createEmployee(newEmployee) {
  try {
    const result = await fetch(`${urlData.postData}`, {
      method: `POST`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    });

    if (!result.ok) {
      throw new Error('Error not created new employee');
    }

    const data = await getAllData();
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

async function updateEmployee(update) {
  try {
    const result = await fetch(`${urlData.patchData}`, {
      method: `PATCH`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(update),
    });

    if (!result.ok) {
      throw new Error('Error not updated employee');
    }

    const data = await getAllData();
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

export {
  getAllData,
  getDataById,
  deleteEmployee,
  createEmployee,
  updateEmployee,
};
