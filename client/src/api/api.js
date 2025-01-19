import urlData from '../endpoints/endpoints.js';

async function getAllData() {
  try {
    const results = await fetch(urlData.getData);

    if (!results.ok) {
      throw new Error(`Data not fetched: ${response.statusText}`);
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
      throw new Error(`Data not fetched: ${response.statusText}`);
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

export { getAllData, getDataById, deleteEmployee };
