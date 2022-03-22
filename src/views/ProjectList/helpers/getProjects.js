import axios from "axios";

const getProjects = async () => {


  return await axios.get('/assets/projects.json')
  /*     .then(res => {
        projects = (res.data);
        console.log("projectsAX", projects)
      })
      .catch(err => console.log("ERROR: ", err)) 
  return projects */
};

export default getProjects;