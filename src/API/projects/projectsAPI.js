import axios from "axios";

const projectsAPI = process.env.REACT_APP_BACKEND + '/api/projects';


const getProjects = async () => {
  try {
    const response = await axios.get(projectsAPI)
    if (response.status === 200) return response;

  } catch (error) {
    console.log("ERROR: ", error)
  }
};

export default getProjects;