import axios from "axios";

const employeesAPI = process.env.REACT_APP_BACKEND + '/api/employees';


// Lists all employees
const getEmployees = async () => {
  try {
    const response = await axios.get(employeesAPI)
    if (response.status === 200) return response;

  } catch (error) {
    console.log("ERROR: ", error)
  }
};

// Lists one specific employee by id
const getOneEmployee = async (id) => {
  try {
    const response = await axios.get(`${employeesAPI}/${id}`)
    if (response.status === 200) return response;

  } catch (error) {
    console.log("ERROR: ", error)
  }
};

export {
  getEmployees,
  getOneEmployee
};