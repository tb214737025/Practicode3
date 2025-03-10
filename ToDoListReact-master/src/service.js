// import axios from 'axios';

// const apiUrl = "https://localhost:5096"

// export default {
//   getTasks: async () => {
//     const result = await axios.get(`${apiUrl}/items`)    
//     return result.data;
//   },


//   addTask: async(name)=>{
//     console.log('addTask', name)
//     //TODO
//     return {};
//   },

//   setCompleted: async(id, isComplete)=>{
//     console.log('setCompleted', {id, isComplete})
//     //TODO
//     return {};
//   },

//   deleteTask:async()=>{
//     console.log('deleteTask')
//   }
// };


import axios from 'axios';
axios.defaults.baseURL =  "http://localhost:5096";
// const apiUrl = "http://localhost:5096"

export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)    
    return result.data;
  },

  addTask: async(name) => {
    console.log('addTask', name)
    const result = await axios.post(`addTask`, { name });
    return result.data;
  },
  addTask: async(name) => {
    console.log('addTask', name)
    const result = await axios.post(`/addTask?name=${name}`);
    return result.data;
  },

  setCompleted: async(id, isComplete) => {
    console.log('setCompleted', { id, isComplete })
    const result = await axios.put(`/todoitems/${id}`, { isComplete });
    return result.data;
  },

  deleteTask: async(id) => {
    console.log('deleteTask', id)
    const result = await axios.delete(`/todoitems/${id}`);
    return result.data;
  }
};

axios.interceptors.response.use(
  response => response,
  error => {
    console.error('Error in response:', error);
    return Promise.reject(error);
  }
);
// axios.interceptors.response.use(
//   response => response,
//   error => {
//     console.error('Error in response:', error);
//     return Promise.reject(error);
//   }
// );